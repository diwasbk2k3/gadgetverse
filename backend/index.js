const express = require("express");
const cors = require("cors");
const userRoute = require('./routes/userRoute');
const adminRoute = require('./routes/adminRoute');
const messageRoute = require('./routes/messageRoute');
const productRoute = require('./routes/productRoute');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/users', userRoute);
app.use('/admins', adminRoute);
app.use('/messages', messageRoute); 
app.use('/products', productRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});