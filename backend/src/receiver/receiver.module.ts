import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ReceiverController } from './receiver.controller';
import { receiverProviders } from './receiver.providers';
import { ReceiverService } from './receiver.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ReceiverController],
  providers: [
    ...receiverProviders,
    ReceiverService,
  ],
})
export class ReceiverModule {}