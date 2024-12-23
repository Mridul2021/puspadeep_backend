const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 6010;
const app = express();
const queryRoutes = require('./routes/queryRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const ongoingProjectsRoutes = require('./routes/ongoingProjectsRoutes');
const completedProjectsRoutes = require('./routes/completedProjectsRoutes');
const ourFamily = require('./routes/ourFamilyRoutes');

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error: ', err));

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', queryRoutes);
app.use('/api', aboutRoutes);
app.use('/api', ongoingProjectsRoutes);
app.use('/api', completedProjectsRoutes);
app.use('/api', ourFamily);

app.listen(PORT, () => {
  console.log(`Server is Running on port: ${PORT}`);
});
