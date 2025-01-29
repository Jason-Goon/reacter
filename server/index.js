const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const VALID_USER = {
    username: 'chad.rocker',
    password: 'testpass123',
    name: 'Chad Rocker',
    role: 'developer'
};

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === VALID_USER.username && 
        password === VALID_USER.password) {
        res.json({ 
            success: true, 
            token: 'dev-token-123',
            user: {
                name: VALID_USER.name,
                role: VALID_USER.role
            }
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Invalid credentials'
        });
    }
});

app.listen(3005, () => console.log('Server running on port 3005'));
