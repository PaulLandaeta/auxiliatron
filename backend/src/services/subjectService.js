const subjectRepository = require("../repositories/subjectRepository");
const logger = require('../utils/logger');

const getSubjectsService = async () => {
  try {
    logger.info("getSubjectsService - Fetching subjects from the database"); 
    const subjects = await subjectRepository.getSubjects();
    logger.info("getSubjectsService - Subjects fetched successfully!");
    return subjects;
  } catch (error) {
    logger.error("getSubjectsService - Error fetching subjects: ", error);
    throw error;
  }
};

const getSubjectsByIdService = async (id) => {
    try {
      logger.info(`getSubjectsByIdService - Fetching subject by id from the database ${id}`); 
      const subject = await subjectRepository.getSubjectById(id);
      logger.info("getSubjectsByIdService - Subject fetched successfully!");
      return subject;
    } catch (error) {
      logger.error(`getSubjectsByIdService - Error fetching subject by id: ${id}`, error);
      throw error;
    }
};

module.exports =  getSubjectsService;
module.exports =  getSubjectsByIdService;
