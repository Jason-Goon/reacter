const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/login', (req, res) => {
  console.log(req.body)
  res.json({ message: 'Login endpoint hit' })
})

app.listen(3005, () => {
  console.log('Server running on port 3005')
})
