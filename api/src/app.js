const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { FRONT_URL } = process.env;
//routes var
const pokemon = require('./routes/pokemon.route');
const filter = require('./routes/filter.route');
const types = require('./routes/type.route');
const welcome = require('./routes/welcome.route');

require('./db.js');

const server = express();

server.name = 'API';

const corsOptions = {
  origin: FRONT_URL,
};

server.use(cors(corsOptions));
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

//routes
server.use('/pokemon', pokemon);
server.use("/filter", filter);
server.use('/types', types);
server.use('/', welcome);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;