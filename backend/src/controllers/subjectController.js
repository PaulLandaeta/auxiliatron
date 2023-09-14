const logger = require('../utils/logger');
const getSubjectsByIdService = require('../services/subjectService');
const getSubjectController = async (req, res) => {
    logger.info('getSubjectController - Req', req);
    try {
        // const users = await getUserService();
        return res.status(200).json({
            success: true,
            message: 'Subjects retrieved successfully',
            data: []
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subjects',
            error: error.message
        })
    }
    
};

const getSubjectByIdController = async (req, res) => {
    logger.info('getSubjectByIdController - Req', req);
    
    try {
        const subject = await getSubjectsByIdService();
        return res.status(200).json({
            success: true,
            message: 'Subject retrieved successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subject',
            error: error.message
        })
    }
    
};

const postSubjectController = async (req, res) => {
    logger.info('postSubjectController - Req', req);
    const { body } = req;
    logger.info('postSubjectController - Body', body);
    try {
        // const subject = await postSubjectService(body);
        return res.status(200).json({
            success: true,
            message: 'Subjects created successfully',
            data: []
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating subject',
            error: error.message
        })
    }
    
};

const putSubjectController = async (req, res) => {
    logger.info('putSubjectController - Req', req);
    try {
        // const users = await getUserService();
        return res.status(200).json({
            success: true,
            message: 'Subjects updated successfully',
            data: []
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subject',
            error: error.message
        })
    }
    
};

const deleteSubjectController = async (req, res) => {
    logger.info('deleteSubjectController - Req', req);
    const { params } = req;
    logger.info('deleteSubjectController - Params', params);
    const { id } = params;
    logger.info('deleteSubjectController - id', id);
    try {
        const subject = await getSubjectsByIdService(id);
        return res.status(200).json({
            success: true,
            message: 'Subjects deleted successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error deleting subjects',
            error: error.message
        })
    }
    
};

module.exports = { 
    getSubjectController,
    getSubjectByIdController,
    postSubjectController,
    putSubjectController,
    deleteSubjectController
};