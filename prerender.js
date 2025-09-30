// prerender.js
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { run } = require('react-snap');

const routes = [
  '/',
  '/buyers',
  '/sellers',
  '/join',
  '/about',
  '/blog',
  '/mortgage-calculator',
  '/closing-cost-estimator',
  '/financial-assessment',
  '/contact',
];

run({
  // Your build directory
  source: 'dist',
  // Routes to pre-render
  include: routes,
  // Disable puppeteer sandbox for compatibility
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  // Don't minify HTML
  minifyHtml: false,
  // Wait for network requests to finish
  waitFor: 1000,
  // Handle dynamic content
  puppeteerIgnoreHTTPSErrors: true,
  // Concurrency
  concurrency: 4,
});
