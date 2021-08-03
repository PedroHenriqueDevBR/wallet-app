
import { Connection } from 'typeorm';
import { Transfer } from './transfer.entity';

export const transferProviders = [
  {
    provide: 'TRANSFER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Transfer),
    inject: ['DATABASE_CONNECTION'],
  },
];
