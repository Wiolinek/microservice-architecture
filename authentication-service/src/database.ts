import { winstonLogger } from '@authentication-service/logger';
import { Logger } from 'winston';
import config from '@authentication-service/config';
import { Sequelize } from 'sequelize';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'authentication DatabaseServer', 'debug');

export const sequelize = new Sequelize(config.MYSQL_DB!, {
  dialect: 'mysql',
  logging: false,
  dialectOptions: { multipleStatements: true },
});

export const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connection has been established successfully.');
    log.info('MySQL connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    log.log('error', 'Authentication Service databaseConnection() method error:', error);
  }
};
