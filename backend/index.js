const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');

mongoose.connect(`mongodb://localhost:27017/student-manager`).then(() => {
  console.log('database connected');
}).catch((err) => {
  console.log('Error connecting to MongoDB', err);
});
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use('/api',authRoutes);
app.use('/api',studentRoutes);
