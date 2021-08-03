import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardModule } from './card/card.module';
import { CategoryModule } from './category/category.module';
import { ReceiverModule } from './receiver/receiver.module';
import { TransferModule } from './transfer/transfer.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    CardModule,
    TransferModule,
    ReceiverModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
