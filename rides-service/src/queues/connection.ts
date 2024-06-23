import config from '@rides-service/config';
import { Logger } from 'winston';
import { winstonLogger } from '@rides-service/logger';
import client, { Channel, Connection } from 'amqplib';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'ridesQueueConnection', 'debug');

async function createConnection(): Promise<Channel | undefined> {
  try {
    const connection: Connection = await client.connect(`${config.RABBITMQ_ENDPOINT}`);
    const channel: Channel = await connection.createChannel();
    log.info('Rides server connected to queue successfully...');
    closeConnection(channel, connection);
    return channel;
  } catch (error) {
    log.log('error', 'Rides Service error createConnection() method:', error);
    return undefined;
  }
}

function closeConnection(channel: Channel, connection: Connection): void {
  process.once('SIGINT', async () => {
    await channel.close();
    await connection.close();
  });
}

export { createConnection };
