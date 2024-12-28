import express from 'express';
import { crawlHandler } from '../controllers/crawlController.js';

const router = express.Router();

router.get('/crawl', crawlHandler);

export default router;