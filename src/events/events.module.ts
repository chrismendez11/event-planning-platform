import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsRepository } from './events.repository';
import { EventsController } from './events.controller';
import { PrismaModule } from '../shared/modules/prisma/prisma.module';
import { EventTypesController } from './event-types/event-types.controller';
import { EventGuestsController } from './event-guests/event-guests.controller';

@Module({
  imports: [PrismaModule],
  controllers: [EventsController, EventTypesController, EventGuestsController],
  providers: [EventsService, EventsRepository],
})
export class EventsModule {}
