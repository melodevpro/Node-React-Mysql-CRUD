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

// ✅ Posts Route (CORREGIDA)
app.get('/api/posts', (req, res) => {
    db.query("SELECT * FROM post", (err, rows) => {  // 🔥 TABLA CORRECTA
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
