// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Use a port of your choice

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to my portfolio backend!');
});

// Example endpoint
app.get('/api/projects', (req, res) => {
    const projects = [
        { id: 1, title: 'Portfolio Project 1', description: 'Description of project 1' },
        { id: 2, title: 'Portfolio Project 2', description: 'Description of project 2' }
    ];
    res.json(projects);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
