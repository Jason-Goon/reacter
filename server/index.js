const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const VALID_CREDENTIALS = {
  username: 'catsex',
  password: 'dogballs'
};

// Changed from /api/login to /dev/login to match nginx location
app.post('/dev/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === VALID_CREDENTIALS.username && 
      password === VALID_CREDENTIALS.password) {
    res.json({ 
      success: true, 
      token: 'dummy-jwt-token',
      user: { username }
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid credentials' 
    });
  }
});

// Add a root route for /dev/
app.get('/dev/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(3005, () => {
  console.log('Server running on port 3005');
});
