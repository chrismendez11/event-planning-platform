import { Injectable } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  constructor(private readonly eventsRepository: EventsRepository) {}

  async createEvent(createEventDto: CreateEventDto) {
    return await this.eventsRepository.createEvent(createEventDto);
  }

  async getEvents() {
    return await this.eventsRepository.getEvents();
  }
}
