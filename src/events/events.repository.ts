import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/modules/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { UpdateEventGuestDto } from './event-guests/dto/update-event-guest.dto';

@Injectable()
export class EventsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createEvent(createEventRepositoryDto: CreateEventDto) {
    return this.prismaService.events.create({
      data: createEventRepositoryDto,
      select: {
        eventId: true,
        eventName: true,
      },
    });
  }

  getEvents() {
    return this.prismaService.events.findMany({
      orderBy: {
        eventDatetime: 'asc',
      },
      select: {
        eventId: true,
        eventName: true,
        eventDescription: true,
        eventLocation: true,
        eventDatetime: true,
        EventTypes: {
          select: {
            eventTypeId: true,
            eventTypeName: true,
          },
        },
      },
    });
  }

  getEventById(eventId: string) {
    return this.prismaService.events.findUnique({
      where: {
        eventId,
      },
      select: {
        eventId: true,
        eventName: true,
        eventDescription: true,
        eventLocation: true,
        eventDatetime: true,
        EventTypes: {
          select: {
            eventTypeId: true,
            eventTypeName: true,
          },
        },
        EventGuests: true,
      },
    });
  }

  updateEventById(eventId: string, updateEventRepositoryDto: UpdateEventDto) {
    return this.prismaService.events.update({
      where: {
        eventId,
      },
      data: updateEventRepositoryDto,
      select: {
        eventId: true,
        eventName: true,
      },
    });
  }

  deleteEventById(eventId: string) {
    return this.prismaService.events.delete({
      where: {
        eventId,
      },
      select: {
        eventId: true,
        eventName: true,
      },
    });
  }

  getEventTypes() {
    return this.prismaService.eventTypes.findMany();
  }

  getEventTypeById(eventTypeId: string) {
    return this.prismaService.eventTypes.findUnique({
      where: {
        eventTypeId,
      },
    });
  }

  getEventGuestsById(eventId: string) {
    return this.prismaService.eventGuests.findMany({
      orderBy: {
        eventGuestName: 'asc',
      },
      where: {
        eventId,
      },
      select: {
        eventGuestId: true,
        eventGuestName: true,
        eventGuestEmail: true,
        eventGuestPhone: true,
        eventGuestInvitationSent: true,
        eventGuestCreatedAt: true,
      },
    });
  }

  getEventGuestById(eventGuestId: string) {
    return this.prismaService.eventGuests.findUnique({
      where: {
        eventGuestId,
      },
      select: {
        eventGuestId: true,
        eventGuestName: true,
        eventGuestEmail: true,
        eventGuestPhone: true,
        eventGuestInvitationSent: true,
      },
    });
  }

  updateEventGuestById(
    eventGuestId: string,
    updateEventGuestRepositoryDto: UpdateEventGuestDto,
  ) {
    return this.prismaService.eventGuests.update({
      where: {
        eventGuestId,
      },
      data: updateEventGuestRepositoryDto,
      select: {
        eventGuestId: true,
      },
    });
  }

  deleteEventGuestById(eventGuestId: string) {
    return this.prismaService.eventGuests.delete({
      where: {
        eventGuestId,
      },
      select: {
        eventGuestId: true,
      },
    });
  }
}
