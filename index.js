const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3010;

// MongoDB Atlas connection string (replace <username> and <password> with actual values)
const dbURI = 'mongodb+srv://divyasingh5028:lucygreat@cluster0.501o0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Serve static files from the 'static' directory
app.use(express.static('static'));

// Serve index.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
