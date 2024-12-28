import { strict as assert } from 'assert';
import { isProductUrl } from './src/utils/url.js';
import { normalizeUrl } from './src/utils/url.js';

async function runTests() {
  console.log('Running tests...');
  
  // Test URL normalization
  assert.equal(
    normalizeUrl('/product/123', 'https://example.com'),
    'https://example.com/product/123',
    'URL normalization failed'
  );
  
  // Test product URL detection
  assert.equal(
    isProductUrl('https://example.com/product/123'),
    true,
    'Product URL detection failed'
  );
  
  assert.equal(
    isProductUrl('https://example.com/about'),
    false,
    'Non-product URL incorrectly detected as product URL'
  );
  
  console.log('All tests passed!');
}

runTests().catch(console.error);