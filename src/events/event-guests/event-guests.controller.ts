import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { EventsService } from '../events.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateEventGuestDto } from './dto/update-event-guest.dto';
import { AuthGuard } from 'src/shared/modules/auth/guards/auth.guard';

@ApiTags('Event guests')
@UseGuards(AuthGuard)
@Controller('event-guests')
export class EventGuestsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get(':eventGuestId')
  getEventGuestById(@Param('eventGuestId') eventGuestId: string) {
    return this.eventsService.getEventGuestById(eventGuestId);
  }

  @Put(':eventGuestId')
  updateEventGuestById(
    @Param('eventGuestId') eventGuestId: string,
    @Body() updateEventGuestDto: UpdateEventGuestDto,
  ) {
    return this.eventsService.updateEventGuestById(
      eventGuestId,
      updateEventGuestDto,
    );
  }

  @Delete(':eventGuestId')
  deleteEventGuestById(@Param('eventGuestId') eventGuestId: string) {
    return this.eventsService.deleteEventGuestById(eventGuestId);
  }
}
