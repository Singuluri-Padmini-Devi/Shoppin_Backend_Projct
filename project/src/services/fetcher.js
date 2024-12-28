import axios from 'axios';
import { CRAWLER_CONFIG } from '../config/app.js';

export async function fetchPage(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': CRAWLER_CONFIG.userAgent
      },
      timeout: CRAWLER_CONFIG.timeout
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return null;
  }
}