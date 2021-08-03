import { Controller, Get } from '@nestjs/common';
import { Receiver } from './receiver.entity';
import { ReceiverService } from './receiver.service';


@Controller('receiver')
export class ReceiverController {
  constructor(private readonly receiverService: ReceiverService) {}

  @Get('/all')
  getReceivers(): Promise<Receiver[]> {
    return this.receiverService.getAll();
  }
}