import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.modules';
import { MessagingModule } from '@infra/messaging/messaging.module';

@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
})
export class AppModule {}

// ConfigModule.forRoot({
//    isGlobal: true,
//    envFilePath: '.env',
//  }),
