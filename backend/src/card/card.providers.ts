
import { Connection } from 'typeorm';
import { Card } from './card.entity';

export const cardProviders = [
  {
    provide: 'CARD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Card),
    inject: ['DATABASE_CONNECTION'],
  },
];
