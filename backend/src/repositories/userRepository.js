const knex = require("knex");
const mysqlConnection = require("../config/knex-mysql");
const db = knex(mysqlConnection.development);

const getUser = async () => {
  try {
    const users = await db("users").select("*");
    const usersJson = users.map((row) => ({
      id: row.id,
      name: row.name,
      lastname: row.lastname,
      code: row.code,
      username: row.username,
    }));
    return usersJson;
  } catch (e) {
    console.error(e);
  }
};

module.exports = getUser;
