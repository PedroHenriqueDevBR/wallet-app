import { Body, Controller, Get, HttpStatus, NotFoundException, Post, Res } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { Card } from './card.entity';
import { CardService } from './card.service';


@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) { }

  cardDataIsValidToSave(body: any): boolean {
    if (
      body['name'] == undefined ||
      body['flagImage'] == undefined ||
      body['balance'] == undefined ||
      body['cardNumber'] == undefined ||
      body['validateDate'] == undefined
    ) {
      return false;
    }
    return true;
  }

  @Post('/')
  async createCard(@Body() body, @Res() response) {
    try {
      if (this.cardDataIsValidToSave(body)) {
        const user: User = new User('', '');
        user.id = 1;
        const card: Card = Card.fronObject(body);
        card.user = user;
        const createdCard: Card = await this.cardService.createCard(card);
        response.status(HttpStatus.OK).send(createdCard);
      }
      response.status(HttpStatus.BAD_REQUEST).send('Invalid data');
    } catch {
      response.status(HttpStatus.BAD_REQUEST).send();
    }
  }

  @Get('/')
  async getCard(): Promise<Card[]> {
    const user: User = new User('', '');
    user.id = 1;
    return await this.cardService.getCards(user);
  }
}