const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const wigRoutes = require('./routes/wigRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use wig routes
app.use('/api/wigs', wigRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Wig Shop API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


