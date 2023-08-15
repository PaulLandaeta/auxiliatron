const getUserService = require('../services/userService');
const getUserController = (req, res) => {
    // 
    // call service
    console.log('hola!!!!');
    const response = getUserService();
    res.status(200).json(response);
};

module.exports = getUserController;