import { Injectable } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { UpdateEventGuestDto } from './event-guests/dto/update-event-guest.dto';

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
    return await this.eventsRepository.deleteEventById(eventId);
  }

  async getEventTypes() {
    return await this.eventsRepository.getEventTypes();
  }

  async getEventTypeById(eventTypeId: string) {
    return await this.eventsRepository.getEventTypeById(eventTypeId);
  }

  async getEventGuestsById(eventId: string) {
    return await this.eventsRepository.getEventGuestsById(eventId);
  }

  async getEventGuestById(eventGuestId: string) {
    return await this.eventsRepository.getEventGuestById(eventGuestId);
  }

  async updateEventGuestById(
    eventGuestId: string,
    updateEventGuestDto: UpdateEventGuestDto,
  ) {
    return await this.eventsRepository.updateEventGuestById(
      eventGuestId,
      updateEventGuestDto,
    );
  }

  async deleteEventGuestById(eventGuestId: string) {
    return await this.eventsRepository.deleteEventGuestById(eventGuestId);
  }
}
