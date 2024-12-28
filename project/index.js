import express from 'express';
import crawlerRoutes from './src/routes/crawler.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import { requestLogger } from './src/middleware/requestLogger.js';
import { PORT } from './src/config/app.js';

const app = express();

// Middleware
app.use(express.json());
app.use(requestLogger);

// Routes
app.use('/api', crawlerRoutes);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Crawler API running at http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/api/crawl?domains=example1.com,example2.com`);
});