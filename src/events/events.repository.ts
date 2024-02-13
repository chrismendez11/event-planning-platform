import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/modules/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createEvent(createEventRepositoryDto: CreateEventDto) {
    return this.prismaService.events.create({
      data: createEventRepositoryDto,
      select: {
        eventId: true,
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
}
