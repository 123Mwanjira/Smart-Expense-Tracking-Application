const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5555;

// Enable Cross-Origin requests to prevent port blockings from client side
app.use(cors({ origin: 'http://localhost:5173' })); 
app.use(express.json());

// Bind the endpoints
app.use('/api/transactions', require('./routes/transactions'));

app.get('/', (req, res) => {
  res.json({ message: "Smart Expense API engine is running smoothly" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server up and listening on port http://localhost:${PORT}`);
});
