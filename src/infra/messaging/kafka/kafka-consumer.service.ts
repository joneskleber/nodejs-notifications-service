import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

// import { ConfigService } from '@nestjs/config';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    //  const config = new ConfigService();
    //  const kafka_username = config.get<string>('KAFKA_USERNAME') || 'undefined';
    //  const kafka_password = config.get<string>('KAFKA_PASSWORD') || 'undefined';
    //  const kafka_clientId = config.get<string>('KAFKA_CLIENTID') || 'undefined';
    //  const kafka_brokers = config.get<string>('KAFKA_BROKERS') || 'undefined';

    //  KAFKA_USERNAME =
    //  KAFKA_PASSWORD =
    //  KAFKA_CLIENTID =
    //  KAFKA_BROKERS  =

    super({
      client: {
        clientId: 'notifications',
        brokers: ['pretty-jackal-5748-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cHJldHR5LWphY2thbC01NzQ4JL473RvTXEoFNXQ1t4UVm1VBfsU-5WSXFbPARKE',

          password:
            '6s8j5t3MfL0_Tc1biow0XJpAGgibxtRIDnjGJchNMwfU7P49tzK3PJufpCIN8cBNXHMCkA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
