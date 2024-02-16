require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

require('./config/cloudinary.config');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', routes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const error = err.message || 'Internal server error';
  res.status(status).json({ error });
});

module.exports = app;
