import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.getUserByEmail(email);
    const isPasswordValid = await bcrypt.compare(password, user.userPassword);

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.userId, name: user.userName };
    const jwt = await this.jwtService.signAsync(payload);

    return {
      access_token: jwt,
    };
  }
}
