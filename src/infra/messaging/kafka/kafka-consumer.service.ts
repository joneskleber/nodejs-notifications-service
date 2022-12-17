import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    const config = new ConfigService();
    const kafka_username = config.get<string>('KAFKA_USERNAME') || 'undefined';
    const kafka_password = config.get<string>('KAFKA_PASSWORD') || 'undefined';
    const kafka_clientId = config.get<string>('KAFKA_CLIENTID') || 'undefined';
    const kafka_brokers = config.get<string>('KAFKA_BROKERS') || 'undefined';

    super({
      client: {
        clientId: kafka_clientId,
        brokers: [`${kafka_brokers}`],
        sasl: {
          mechanism: 'scram-sha-256',
          username: kafka_username,
          password: kafka_password,
        },
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
