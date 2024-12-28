import { crawlAndSaveResults } from '../services/crawlerService.js';

export async function crawlHandler(req, res) {
  const domains = req.query.domains?.split(',').filter(Boolean) || [];
  
  if (!domains.length) {
    return res.status(400).json({ 
      success: false,
      error: 'Please provide domains as comma-separated query parameter: ?domains=example1.com,example2.com' 
    });
  }

  try {
    console.log(`Starting crawl for domains: ${domains.join(', ')}`);
    const results = await crawlAndSaveResults(domains);
    
    res.json({
      success: true,
      message: 'Crawl completed and results saved',
      results
    });
  } catch (error) {
    console.error('Crawl failed:', error);
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
}