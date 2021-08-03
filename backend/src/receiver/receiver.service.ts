import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Receiver } from './receiver.entity';

@Injectable()
export class ReceiverService {

  constructor(
    @Inject('RECEIVER_REPOSITORY')
    private receiverRepository: Repository<Receiver>,
  ) {}

  async getAll(): Promise<Receiver[]> {
    return this.receiverRepository.find();
  }
}