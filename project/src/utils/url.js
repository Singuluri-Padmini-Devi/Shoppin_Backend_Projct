import URLParse from 'url-parse';

export function normalizeUrl(url, base) {
  try {
    const parsed = new URLParse(url, base);
    return parsed.toString();
  } catch (error) {
    console.error(`Error normalizing URL ${url}:`, error.message);
    return null;
  }
}

export function isProductUrl(url) {
  const productPatterns = [
    /\/product\//i,
    /\/item\//i,
    /\/p\//i,
    /\/products\//i,
    /-pd\//i
  ];
  return productPatterns.some(pattern => pattern.test(url));
}