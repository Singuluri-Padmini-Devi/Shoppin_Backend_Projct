# E-commerce Product URL Crawler

A scalable web crawler designed to discover and list product URLs across multiple e-commerce websites.

## Features

- Concurrent crawling with configurable concurrency limits
- Intelligent product URL detection
- Handles different URL patterns and structures
- Robust error handling and retry mechanisms
- Saves results in structured JSON format

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Modify the domains array in `index.js` with your target e-commerce websites
2. Run the crawler:
   ```bash
   npm start
   ```

The crawler will save discovered product URLs to `product_urls.json`.

## Configuration

- Adjust concurrency in the EcommerceCrawler constructor (default: 5)
- Modify product URL patterns in the productPatterns array
- Configure request timeouts and headers in the fetchPage method

## Testing

Run tests with:
```bash
npm test
```

## Architecture

The crawler uses:
- axios for HTTP requests
- cheerio for HTML parsing
- p-limit for concurrency control
- url-parse for URL handling

### Key Components

1. URL Discovery
   - Extracts URLs from HTML using cheerio
   - Normalizes and validates URLs
   - Detects product URLs using regex patterns

2. Crawling Logic
   - Implements breadth-first crawling
   - Maintains visited URL set to avoid duplicates
   - Handles concurrent requests efficiently

3. Error Handling
   - Robust error handling for network requests
   - Timeout mechanisms
   - Invalid URL handling

## Output Format

The crawler generates a JSON file with the following structure:
```json
{
  "example1.com": [
    "https://example1.com/product/123",
    "https://example1.com/item/456"
  ],
  "example2.com": [
    "https://example2.com/p/789",
    "https://example2.com/products/012"
  ]
}
```