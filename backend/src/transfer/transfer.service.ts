import { Injectable, Inject } from '@nestjs/common';
import { createQueryBuilder, Repository, SelectQueryBuilder } from 'typeorm';
import { Transfer } from './transfer.entity';

@Injectable()
export class TransferService {

  constructor(
    @Inject('TRANSFER_REPOSITORY')
    private transferRepository: Repository<Transfer>,
  ) {}

  async makeTransfer(transfer: Transfer): Promise<Transfer> {
    try {
      return await this.transferRepository.save(transfer);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async transfers(): Promise<Transfer[]> {
    try {
      return await this.transferRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async lastTransfers(quantity: number): Promise<Transfer[]> {
    try {
      const query: SelectQueryBuilder<Transfer> = createQueryBuilder<Transfer>('transfer').limit(quantity); 
      return await query.getMany();
    } catch (error) {
      throw error;
    }
  }
}
