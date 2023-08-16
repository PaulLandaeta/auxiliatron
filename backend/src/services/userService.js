const getUser = require("../repositories/userRepository");
const getUserService = async () => {
  const users = await getUser();
  return users;
};

module.exports = getUserService;
