/**
 * index.js — Express server entry point
 *
 * Minimal Node.js tutorial HTTP server built on the Express.js framework.
 * It exposes two static GET endpoints:
 *   GET /              → "Hello world"   (baseline endpoint)
 *   GET /good-evening  → "Good evening"  (additional endpoint)
 *
 * Module system: CommonJS. Runtime: Node.js >= 18 (Express 5 floor).
 * The server binds to process.env.PORT when provided, otherwise port 3000.
 */

// Express is the project's sole production dependency (declared as ^5.2.1 in
// package.json). It provides the application factory, routing, and the HTTP
// server abstraction used below. This is the only module imported by the file.
const express = require('express');

// Instantiate the Express application.
const app = express();

// Resolve the listening port: honor the PORT environment variable when set,
// otherwise fall back to 3000 for local/tutorial use.
const PORT = process.env.PORT || 3000;

// Baseline endpoint: respond with the exact plain-text body "Hello world".
// res.send() sets "Content-Type: text/html; charset=utf-8" by default and
// writes the string verbatim with no added punctuation or trailing newline.
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Additional endpoint: respond with the exact plain-text body "Good evening".
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Start the HTTP listener and log a single informational startup message so the
// server's readiness can be confirmed when launched via `npm start`.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
