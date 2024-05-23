require('dotenv').config();
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import cookieParser from 'cookie-parser';
// import { Logger } from 'winston';
import winston from 'express-winston';
import { format, transports } from 'winston';
import cookieSession from 'cookie-session';
import compression from 'compression';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import config from './config';

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

app.use(compression());
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: false, limit: '200mb' }));
app.use(cookieParser());

//routy

// elastic

// error handler
app.use('*', (_req: express.Request, res: express.Response, next: express.NextFunction) => {
  // const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  // log.log('error', fullUrl + 'does not exist');
  res.status(StatusCodes.NOT_FOUND).json({ message: 'Not found' });
  next();
});

export default app;
