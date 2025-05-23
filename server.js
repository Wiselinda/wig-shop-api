const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const wigRoutes = require('./routes/wigRoutes');
const customerRoutes = require('./routes/customerRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/wigs', wigRoutes);
app.use('/api/customers', customerRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Wig Shop API');
});

// Connect to DB and start server
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
