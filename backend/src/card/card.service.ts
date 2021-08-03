import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardService {

  constructor(
    @Inject('CARD_REPOSITORY')
    private cardRepository: Repository<Card>,
  ) { }

  async createCard(card: Card): Promise<Card> {
    try {
      return await this.cardRepository.save(card);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getCards(user: User): Promise<Card[]> {
    try {
      return await this.cardRepository.find({user: user});
    } catch (error) {
      throw error;
    }
  }
}