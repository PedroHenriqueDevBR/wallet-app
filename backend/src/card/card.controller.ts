import { Controller, Get } from '@nestjs/common';
import { Card } from './card.entity';
import { CardService } from './card.service';


@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('/all')
  getCard(): Promise<Card[]> {
    return this.cardService.getCards();
  }
}