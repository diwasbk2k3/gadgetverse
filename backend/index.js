const express = require("express");
const cors = require("cors");
const userRoute = require('./routes/userRoute');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/users', userRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});