require("dotenv").config();
const pgConfig = {
  development: {
    client: "pg",
    connection: {
      //TODO: jalar desde local ENV
      host: process.env.DB_HOST,
      user: "paul",
      password: "5JbepXDGfTd4vQQrToACmmzYIoIA5Fh3",
      database: "auxiliatron_csle",
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: '../db/migrations'
    },
  },
};

module.exports = pgConfig;
