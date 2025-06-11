const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    // Use routes
    app.use('/api/auth', authRoutes);
    app.use('/api/protected', protectedRoutes);

    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
  });
