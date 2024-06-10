require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
// import { StatusCodes } from 'http-status-codes';
// import { Logger } from 'winston';
// import { winstonLogger } from '@authentication-service/logger';
import compression from 'compression';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import config from '@authentication-service/config';
import { verify } from 'jsonwebtoken';
// import checkConnection from '@authentication-service/elasticsearch';
import { AuthPayload } from '@interfaces/auth';
import { dbConnect } from '@authentication-service/database';
import { Channel } from 'amqplib';
import { createConnection } from '@queues/connection';

const app = express();

// const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'authenticationServer', 'debug');

export let authenticationChannel: Channel;

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

app.use((req:Request, _res: Response, next: NextFunction) => {
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

// rabbit
const startQueuse = async () => {
  authenticationChannel = (await createConnection()) as Channel;
};
startQueuse();

// db

dbConnect();

// // error handler

// app.use((error: ErrorResponse, _req: express.Request, res: express.Response, next: express.NextFunction) => {
//   log.log('error', `Api Gateway Service ${error.comingFrom}:`, error);
//   if (error) {
//     res.status(error.statusCode).json(error.serializeErrors());
//   }
//   next();
// });

export default app;
