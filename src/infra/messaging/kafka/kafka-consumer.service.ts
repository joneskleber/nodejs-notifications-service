import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
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
