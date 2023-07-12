const { connect, connection } = require('mongoose');

//setting up connection to use mongodb
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString);

module.exports = connection;