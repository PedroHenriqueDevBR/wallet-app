import { Controller, Get } from '@nestjs/common';
import { Transfer } from './transfer.entity';
import { TransferService } from './transfer.service';


@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Get('/all')
  getTransfers(): Promise<Transfer[]> {
    return this.transferService.getTransfers();
  }
}