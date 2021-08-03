import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardService {

  constructor(
    @Inject('CARD_REPOSITORY')
    private cardRepository: Repository<Card>,
  ) {}

  async getCards(): Promise<Card[]> {
    return this.cardRepository.find();
  }
}