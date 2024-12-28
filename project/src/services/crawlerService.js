import { EcommerceCrawler } from '../crawler.js';
import { saveToFile } from '../utils/fileSystem.js';
import { CRAWLER_CONFIG } from '../config/app.js';

export async function crawlAndSaveResults(domains) {
  const crawler = new EcommerceCrawler(CRAWLER_CONFIG.concurrency);
  const results = await crawler.crawlDomains(domains);
  await saveToFile(results, CRAWLER_CONFIG.outputFile);
  return results;
}