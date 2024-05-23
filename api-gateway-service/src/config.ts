import dotenv from 'dotenv';

dotenv.config({});

if (process.env.ENABLE_APM === '1') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('elastic-apm-node').start({
    serviceName: 'jobber-notification',
    serverUrl: process.env.ELASTIC_APM_SERVER_URL,
    secretToken: process.env.ELASTIC_APM_SECRET_TOKEN,
    environment: process.env.NODE_ENV,
    active: true,
    captureBody: 'all',
    errorOnAbortedRequests: true,
    captureErrorLogStackTraces: 'always',
  });
}

interface Config {
  JWT_TOKEN: string | undefined;
  GATEWAY_JWT_TOKEN: string | undefined;
  NODE_ENV: string | undefined;
  SECRET_KEY_ONE: string | undefined;
  SECRET_KEY_TWO: string | undefined;
  CLIENT_URL: string | undefined;
  AUTH_BASE_URL: string | undefined;
  USERS_BASE_URL: string | undefined;
  GIG_BASE_URL: string | undefined;
  MESSAGE_BASE_URL: string | undefined;
  ORDER_BASE_URL: string | undefined;
  REVIEW_BASE_URL: string | undefined;
  REDIS_HOST: string | undefined;
  ELASTIC_SEARCH_URL: string | undefined;
}

const config: Config = {
  JWT_TOKEN: process.env.JWT_TOKEN || '1234',
  GATEWAY_JWT_TOKEN: process.env.GATEWAY_JWT_TOKEN || '1234',
  NODE_ENV: process.env.NODE_ENV || '',
  SECRET_KEY_ONE: process.env.SECRET_KEY_ONE || '',
  SECRET_KEY_TWO: process.env.SECRET_KEY_TWO || '',
  CLIENT_URL: process.env.CLIENT_URL || '',
  AUTH_BASE_URL: process.env.AUTH_BASE_URL || '',
  USERS_BASE_URL: process.env.USERS_BASE_URL || '',
  GIG_BASE_URL: process.env.GIG_BASE_URL || '',
  MESSAGE_BASE_URL: process.env.MESSAGE_BASE_URL || '',
  ORDER_BASE_URL: process.env.ORDER_BASE_URL || '',
  REVIEW_BASE_URL: process.env.REVIEW_BASE_URL || '',
  REDIS_HOST: process.env.REDIS_HOST || '',
  ELASTIC_SEARCH_URL: process.env.ELASTIC_SEARCH_URL || '',
};

export default config;
