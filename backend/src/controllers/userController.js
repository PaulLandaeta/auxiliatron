const getUserService = require('../services/userService');
const logger = require('../utils/logger');

const getUserController = async (req, res) => {
    logger.info('getUserController - Req', req);
    try {
        const users = await getUserService();
        return res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving users',
            error: error.message
        })
    }
    
};

module.exports = getUserController;