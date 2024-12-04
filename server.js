const express = require('express');
const dotenv = require('dotenv');
const notesRoutes = require('./routes/notes');
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.use('/api/notes', notesRoutes);

// Start server
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
