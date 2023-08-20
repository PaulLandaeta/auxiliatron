const userRepository = require("../repositories/userRepository");
const logger = require('../utils/logger');

const getUserService = async () => {
  try {
    logger.info("getUserService - Fetching users from the database"); 
    const users = await userRepository.getUser();
    logger.info("getUserService - Users fetched successfully!");
    return users;
  } catch (error) {
    logger.error("getUserService - Error fetching users: ", error); // Agregar log en caso de error
    throw error;
  }
};

module.exports =  getUserService;
