import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserByEmail(userEmail: string) {
    return await this.usersRepository.getUserByEmail(userEmail);
  }
}
