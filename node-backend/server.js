const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin1969',
    database: 'react_node',
});

db.connect(err => {
    if (err) {
        console.error('❌ Error connecting to MySQL:', err);
    } else {
        console.log('✅ Connected to MySQL');
    }
});

// ✅ Test Route
app.get('/', (req, res) => {
    res.send('API is running ✅');
});

// ✅ Get All Posts
app.get('/api/posts', (req, res) => {
    db.query("SELECT * FROM post", (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// ✅ Create Post
app.post('/api/posts', (req, res) => {
    const { title, body } = req.body;
    db.query("INSERT INTO post (title, body) VALUES (?, ?)", [title, body], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, title, body });
    });
});

// ✅ Get Single Post
app.get('/api/posts/:id', (req, res) => {
    db.query("SELECT * FROM post WHERE id = ?", [req.params.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows[0]);
    });
});

// ✅ Update Post (PUT CORREGIDO)
app.put('/api/posts/:id', (req, res) => {
    const { title, body } = req.body; // 🔥 Esto faltaba
    db.query("UPDATE post SET title = ?, body = ? WHERE id = ?", [title, body, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: req.params.id, title, body });
    });
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
