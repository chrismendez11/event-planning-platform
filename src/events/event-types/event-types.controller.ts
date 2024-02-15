import { Controller, Get, Param } from '@nestjs/common';
import { EventsService } from '../events.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Event types')
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
