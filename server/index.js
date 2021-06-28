const express = require('express');
require('dotenv').config({ path: '.env' });
const cookieParser = require('cookie-parser');
const db = require('mongoose');
const moment = require('moment');
const morgan = require('./middleware/morgan');

db.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true,
  autoIndex: true,
});

db.connection.on('error', () => {
  console.log('MongoDB connection Error');
});

db.connection.on('open', () => {
  console.log('Connected to DB!');
});

const app = express();

app.use(morgan);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const api = require('./routes/index');

app.use('/api', api);

app.listen(process.env.PORT, () => {
  console.log(`Server started ${moment().format('DD.MM.YYYY HH:mm:ss')}`);
});
