require('dotenv').config({ path: '.env' });
const express = require('express');
const cors = require('cors');
const http = require('http');
const cookieParser = require('cookie-parser');
const moment = require('moment');
const db = require('mongoose');
const morgan = require('./middleware/morgan');
const softDeletePlugin = require('./models/plugins/softDelete');

db.plugin(softDeletePlugin);

const api = require('./routes/index');

const environment = process.env.NODE_ENV;
const mongoUrl = environment === 'local' ? process.env.MONGO_URL_LOCAL : process.env.MONGO_URL;

async function main() {
  db.connect(mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,
  });
  console.log('Connected to DB!');

  const app = express();

  app.use(morgan);
  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/api', api);

  const server = http.createServer(app);

  server.listen(process.env.PORT, () => console.log(`Server started ${moment().format('DD.MM.YYYY HH:mm:ss:SSS')}`));
}

main().catch((err) => console.error(err));
