require('dotenv').config();
import express from 'express';
// import { StatusCodes } from 'http-status-codes';
// import { Logger } from 'winston';
import winston from 'express-winston';
import { format, transports } from 'winston';
import compression from 'compression';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import config from './config';
import { verify } from 'jsonwebtoken';
// import checkConnection from './elasticsearch';
import { AuthPayload } from './interfaces/auth';
// import { dbConnect } from './database';

const app = express();

// const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'apiGatewayServer', 'debug');

app.use(
  winston.logger({
    transports: [
      //where I want to save logs
      new transports.Console(),
      new transports.File({ level: 'warn', filename: './logs/warnLogs.log' }),
      new transports.File({ level: 'error', filename: './logs/errorLogs.log' }),
    ],
    format: format.combine(format.json(), format.timestamp(), format.colorize(), format.simple(), format.prettyPrint()),
    statusLevels: true,
  })
);

app.set('trust proxy', 1);
app.use(hpp());
app.use(helmet());

app.use(
  cors({
    origin: config.API_GATEWAY_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

app.use((req: express.Request, _res: express.Response, next: express.NextFunction) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    const payload: AuthPayload = verify(token, config.JWT_TOKEN!) as AuthPayload;
    req.currentUser = payload;
  }
  next();
});

app.use(compression());
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: false, limit: '200mb' }));

//routy

// elastic
// checkConnection();


// db

// dbConnect();

// // error handler

// app.use((error: ErrorResponse, _req: express.Request, res: express.Response, next: express.NextFunction) => {
//   log.log('error', `Api Gateway Service ${error.comingFrom}:`, error);
//   if (error) {
//     res.status(error.statusCode).json(error.serializeErrors());
//   }
//   next();
// });

export default app;
