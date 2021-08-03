import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Transfer } from './transfer.entity';

@Injectable()
export class TransferService {

  constructor(
    @Inject('TRANSFER_REPOSITORY')
    private transferRepository: Repository<Transfer>,
  ) {}

  async getTransfers(): Promise<Transfer[]> {
    return this.transferRepository.find();
  }
}