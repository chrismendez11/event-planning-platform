import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@ApiTags('Events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.createEvent(createEventDto);
  }

  @Get()
  getEvents() {
    return this.eventsService.getEvents();
  }

  @Get(':eventId')
  getEventById(@Param('eventId') eventId: string) {
    return this.eventsService.getEventById(eventId);
  }

  @Get(':eventId/event-guests')
  getEventGuestsById(@Param('eventId') eventId: string) {
    return this.eventsService.getEventGuestsById(eventId);
  }

  @Put(':eventId')
  updateEventById(
    @Param('eventId') eventId: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventsService.updateEventById(eventId, updateEventDto);
  }

  @Delete(':eventId')
  deleteEventById(@Param('eventId') eventId: string) {
    return this.eventsService.deleteEventById(eventId);
  }
}
