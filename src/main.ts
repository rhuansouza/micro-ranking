import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const logger = new Logger('Main');
const configService = new ConfigService();
async function bootstrap() {

  const RABBITMQ_USER = configService.get('RABBITMQ_USER');
  const RABBITMQ_PASSWORD = configService.get('RABBITMQ_PASSWORD');
  const RABBITMQ_URL = configService.get('RABBITMQ_URL');

  
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${RABBITMQ_USER}:${RABBITMQ_PASSWORD}@${RABBITMQ_URL}`],
      noAck: false,
      queue: 'rankings',
    },
  });
  
  await app.listen();
}
bootstrap();
