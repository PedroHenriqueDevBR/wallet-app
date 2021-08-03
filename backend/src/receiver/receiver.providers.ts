
import { Connection } from 'typeorm';
import { Receiver } from './receiver.entity';

export const receiverProviders = [
  {
    provide: 'RECEIVER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Receiver),
    inject: ['DATABASE_CONNECTION'],
  },
];
