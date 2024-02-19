import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { EventsService } from '../events.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/shared/modules/auth/guards/auth.guard';

@ApiTags('Event types')
@UseGuards(AuthGuard)
@Controller('event-types')
export class EventTypesController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getEventsTypes() {
    return this.eventsService.getEventTypes();
  }

  @Get(':eventTypeId')
  getEventTypeById(@Param('eventTypeId') eventTypeId: string) {
    return this.eventsService.getEventTypeById(eventTypeId);
  }
}
