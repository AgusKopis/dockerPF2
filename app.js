/**
 * Simple Node.js Express app to serve home page and API for MySQL data.
 * Make sure to run `npm install express mysql2` before starting.
 */

const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = 8080;

// MySQL connection config - use the container MySQL details
const dbConfig = {
    host: 'localhost', // If running locally and MySQL port 3306 exposed
    user: 'root',
    password: 'root',
    database: 'testDocker',
};

// Create MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Serve static HTML from root
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get users data
app.get('/api/users', (req, res) => {
  pool.query('SELECT * FROM Users', (err, results) => {
    if (err) {
        console.error('Error fetching data from DB:', err);
        res.status(500).json({ error: 'Error fetching data from DB' });
        return;
    }
    res.json(results);
    });
});

// Serve index.html on root url
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});