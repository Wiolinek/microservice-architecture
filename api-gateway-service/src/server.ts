require('dotenv').config();
// import express, { Request, Response, NextFunction } from 'express';
import express from 'express';
// import { StatusCodes } from 'http-status-codes';
// import { Logger } from 'winston';
// import { winstonLogger } from '@api-gateway-service/logger';
import cookieSession from 'cookie-session';
import compression from 'compression';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import config from './config';
// import { axiosAuthInstance } from '@services/api/auth';
// import { ErrorResponse } from '@interfaces/api-gateway';
// import checkConnection from './elasticsearch';

const app = express();

// const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'apiGatewayServer', 'debug');

app.set('trust proxy', 1);
app.use(
  cookieSession({
    name: 'Ride-sharing',
    keys: [`${config.SECRET_KEY_ONE}`, `${config.SECRET_KEY_TWO}`],
    maxAge: 24 * 7 * 3600,
    secure: config.NODE_ENV !== 'development', //will be update with value from config, if true it has to be https
    // sameSite: none
  })
);

app.use(hpp());
app.use(helmet());

app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
    // preflightContinue: false,
    // optionsSuccessStatus: 204,
  })
);

// add bearer token to header before api service send request to service
// app.use((req: Request, _res: Response, next: NextFunction) => {
//   if (req.session?.jwt) {
//     axiosAuthInstance.defaults.headers['Authorization'] = `Bearer ${req.session?.jwt}`;
//   }
//   next();
// });

app.use(compression());
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: false, limit: '200mb' }));

//routy

// elastic
// checkConnection();

// error handler
// app.use('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
//   const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
//   log.log('error', fullUrl + 'does not exist');
//   res.status(StatusCodes.NOT_FOUND).json({ message: 'Not found' });
//   next();
// });

// app.use((error: ErrorResponse, _req: express.Request, res: express.Response, next: express.NextFunction) => {
//   log.log('error', `Api Gateway Service ${error.comingFrom}:`, error);
//   if (error) {
//     res.status(error.statusCode).json(error.serializeErrors());
//   }
//   next();
// });

export default app;
