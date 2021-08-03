import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TransferController } from './transfer.controller';
import { transferProviders } from './transfer.providers';
import { TransferService } from './transfer.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TransferController],
  providers: [
    ...transferProviders,
    TransferService,
  ],
})
export class TransferModule {}