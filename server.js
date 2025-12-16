const express = require('express');
const path = require('path');
const app = express();

// Serve static files first
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/test', (req, res) => {
  res.send('<p>Success!</p>');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

