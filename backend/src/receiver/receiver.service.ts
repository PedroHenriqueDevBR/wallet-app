import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Receiver } from './receiver.entity';

@Injectable()
export class ReceiverService {

  constructor(
    @Inject('RECEIVER_REPOSITORY')
    private receiverRepository: Repository<Receiver>,
  ) {}

  async createReceiver(receiver: Receiver): Promise<Receiver> {
    try {
      return await this.receiverRepository.save(receiver);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getReceivers(): Promise<Receiver[]> {
    try {
      return await this.receiverRepository.find();
    } catch (error) {
      throw error;
    }
  }
}