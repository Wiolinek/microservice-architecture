import config from '@rides-service/config';
import { Channel } from 'amqplib';
import { Logger } from 'winston';
import { winstonLogger } from '@rides-service/logger';
import { createConnection } from '@rides-service/queues/connection';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'ridesServiceProducer', 'debug');

export async function publishDirectMessage(
  channel: Channel,
  exchangeName: string,
  routingKey: string,
  message: string,
  logMessage: string
): Promise<void> {
  try {
    if (!channel) {
      channel = (await createConnection()) as Channel;
    }
    await channel.assertExchange(exchangeName, 'direct');
    channel.publish(exchangeName, routingKey, Buffer.from(message));
    log.info(logMessage);
  } catch (error) {
    log.log('error', 'Rides Service Provider publishDirectMessage() method error:', error);
  }
}