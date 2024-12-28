import * as cheerio from 'cheerio';
import URLParse from 'url-parse';
import { normalizeUrl } from '../utils/url.js';

export function extractUrls(html, baseUrl) {
  const $ = cheerio.load(html);
  const urls = new Set();

  $('a').each((_, element) => {
    const href = $(element).attr('href');
    if (href) {
      const normalizedUrl = normalizeUrl(href, baseUrl);
      if (normalizedUrl && new URLParse(normalizedUrl).hostname === new URLParse(baseUrl).hostname) {
        urls.add(normalizedUrl);
      }
    }
  });

  return Array.from(urls);
}