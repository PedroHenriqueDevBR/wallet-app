import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Card } from 'src/card/card.entity';
import { Receiver } from 'src/receiver/receiver.entity';
import { Transfer } from './transfer.entity';
import { TransferService } from './transfer.service';


@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  cardDataIsValidToSave(body: any): boolean {
    if (
      body['value'] == undefined ||
      body['cardId'] == undefined ||
      body['receiverId'] == undefined
    ) {
      return false;
    }
    return true;
  }

  @Post('/')
  async createCard(@Body() body, @Res() response) {
    try {
      if (this.cardDataIsValidToSave(body)) {
        const card: Card = new Card('', '', 0.0, '', '');
        card.id = body['cardId'];
        const receiver: Receiver = new Receiver('', '', '', '');
        receiver.id = body['receiverId'];
        const transfer: Transfer = Transfer.fronObject(body);
        transfer.card = card;
        transfer.receiver = receiver;
        transfer.date = new Date(Date.now());
        const createdTranfer: Transfer = await this.transferService.makeTransfer(transfer);
        response.status(HttpStatus.OK).send(createdTranfer);
      }
      response.status(HttpStatus.BAD_REQUEST).send('Invalid data');
    } catch {
      response.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  @Get('/')
  async getTransfer(@Req() req): Promise<Transfer[]> {
    let qtd = req.query.qtd;
    if (qtd == undefined) {
      return await this.transferService.transfers();
    }
    return await this.transferService.lastTransfers(qtd);
  }
}