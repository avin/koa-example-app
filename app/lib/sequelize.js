import Sequelize from 'sequelize';
import dbConfig from '../../configs/database';

export default new Sequelize(`${dbConfig.DB_CLIENT}://${dbConfig.DB_USERNAME}:${dbConfig.DB_PASSWORD}@${dbConfig.DB_HOST}/${dbConfig.DB_NAME}`);