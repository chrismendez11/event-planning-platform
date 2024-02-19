import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/modules/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getUserByEmail(userEmail: string) {
    return this.prismaService.users.findUnique({
      where: {
        userEmail,
      },
      select: {
        userId: true,
        userName: true,
        userEmail: true,
        userPassword: true,
        userPhone: true,
      },
    });
  }
}
