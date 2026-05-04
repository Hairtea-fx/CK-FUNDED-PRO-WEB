const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// This allows the server to read the data sent from your HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This tells the server to allow access to your CSS, Videos, and Images
app.use(express.static(__dirname));

// ROUTES TO SERVE YOUR FILES
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'log-in.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'dashboard.html')));

// LOGIN BACKEND LOGIC
app.post('/auth/login', (req, res) => {
    const { email, password } = req.body;
    
    console.log(`Login attempt from: ${email}`);

    // For now, let's accept any login to test the redirect
    if (email && password) {
        // In a real app, you'd check the database here
        res.redirect('/dashboard'); 
    } else {
        res.status(401).send('Please enter email and password');
    }
});

app.listen(PORT, () => {
    console.log(`
    ✅ Hairtea Funded Server is LIVE!
    🚀 Access it at: http://localhost:${PORT}
    `);
});