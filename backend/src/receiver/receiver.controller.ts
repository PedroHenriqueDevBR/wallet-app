import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Receiver } from './receiver.entity';
import { ReceiverService } from './receiver.service';


@Controller('receiver')
export class ReceiverController {
  constructor(private readonly receiverService: ReceiverService) {}

  receiverDataIsValidToSave(body: any): boolean {
    if (
      body['name'] == undefined ||
      body['image'] == undefined ||
      body['category'] == undefined ||
      body['color'] == undefined
    ) {
      return false;
    }
    return true;
  }

  @Post('/')
  async createReceiver(@Body() body, @Res() response) {
    try {
      if (this.receiverDataIsValidToSave(body)) {
        const receiver: Receiver = Receiver.fronObject(body);
        const createdReceiver: Receiver = await this.receiverService.createReceiver(receiver);
        response.status(HttpStatus.OK).send(createdReceiver);
      }
      response.status(HttpStatus.BAD_REQUEST).send('Invalid data');
    } catch {
      response.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  @Get('/')
  async getCard(): Promise<Receiver[]> {
    return await this.receiverService.getReceivers();
  }
}
