import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './shared/modules/auth/auth.module';
@Module({
  imports: [AuthModule, EventsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
