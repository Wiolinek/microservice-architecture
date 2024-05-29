// import { Logger } from 'winston';
import config from './config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(config.MYSQL_DB!, {
  dialect: 'mysql',
  logging: false,
  dialectOptions: { multipleStatements: true },
});

export const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};
