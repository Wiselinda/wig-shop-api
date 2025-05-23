const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const wigRoutes = require('./routes/wigRoutes');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/wigs', wigRoutes);
app.use('/api/customers', customerRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection failed:', error));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Wig Shop API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

