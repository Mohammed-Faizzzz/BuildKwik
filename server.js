const express = require('express');
const dotenv = require('dotenv');
const { initDB } = require('./models');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

const app = express();

// Connect Database
initDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', userRoute);  // This should handle POST requests to /api/users
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
