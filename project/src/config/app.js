export const PORT = process.env.PORT || 3000;

export const CRAWLER_CONFIG = {
  concurrency: 5,
  timeout: 10000,
  userAgent: 'Mozilla/5.0 (compatible; EcommerceCrawler/1.0)',
  outputFile: 'product_urls.json'
};