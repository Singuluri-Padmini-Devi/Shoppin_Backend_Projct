import pLimit from 'p-limit';
import { isProductUrl } from './utils/url.js';
import { fetchPage } from './services/fetcher.js';
import { extractUrls } from './services/parser.js';

export class EcommerceCrawler {
  constructor(concurrency = 5) {
    this.limit = pLimit(concurrency);
    this.visited = new Set();
    this.productUrls = new Map();
  }

  async crawlPage(url, domain) {
    if (this.visited.has(url)) {
      return;
    }

    this.visited.add(url);
    console.log(`Crawling: ${url}`);

    const html = await fetchPage(url);
    if (!html) return;

    const urls = extractUrls(html, url);

    if (isProductUrl(url)) {
      if (!this.productUrls.has(domain)) {
        this.productUrls.set(domain, new Set());
      }
      this.productUrls.get(domain).add(url);
    }

    const crawlPromises = urls
      .filter(url => !this.visited.has(url))
      .map(url => this.limit(() => this.crawlPage(url, domain)));

    await Promise.all(crawlPromises);
  }

  async crawlDomains(domains) {
    const crawlPromises = domains.map(domain => {
      const baseUrl = domain.startsWith('http') ? domain : `https://${domain}`;
      return this.limit(() => this.crawlPage(baseUrl, domain));
    });

    await Promise.all(crawlPromises);

    const results = {};
    for (const [domain, urls] of this.productUrls.entries()) {
      results[domain] = Array.from(urls);
    }

    return results;
  }
}