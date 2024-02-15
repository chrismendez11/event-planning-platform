import { Injectable } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(private readonly eventsRepository: EventsRepository) {}

  async createEvent(createEventDto: CreateEventDto) {
    return await this.eventsRepository.createEvent(createEventDto);
  }

  async getEvents() {
    return await this.eventsRepository.getEvents();
  }

  async getEventById(eventId: string) {
    return await this.eventsRepository.getEventById(eventId);
  }

  async updateEventById(eventId: string, updateEventDto: UpdateEventDto) {
    return await this.eventsRepository.updateEventById(eventId, updateEventDto);
  }

  async deleteEventById(eventId: string) {
    return await this.deleteEventById(eventId);
  }
}
