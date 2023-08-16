const getUserService = require('../services/userService');
const getUserController = async (req, res) => {
    const users = await getUserService();
    try {
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