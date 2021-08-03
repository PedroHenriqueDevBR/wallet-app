import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    try {
      console.log('User saved');
      return await this.userRepository.save(user);
    } catch(error) {
      console.log(error);
      throw error;
    }
  }

  async getUser(): Promise<User> {
    try {
      const result: User[] = await this.userRepository.find();
      if (result.length == 0) {
        const user: User = new User('Floyd Miles','https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        return await this.createUser(user);
      }
      return result[0];
    } catch(error) {
      console.log(error);
      throw error;
    }
  }
}