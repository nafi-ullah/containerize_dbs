const isOffline = 0;

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

var dbUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/`;

if (isOffline) {
  dbUrl = `mongodb://localhost:27017/books`;
}

module.exports = { dbUrl };
