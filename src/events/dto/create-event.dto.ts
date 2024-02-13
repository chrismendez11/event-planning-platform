import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  eventName: string;

  @IsOptional()
  @IsString()
  eventDescription: string;

  @IsOptional()
  @IsString()
  eventLocation: string;

  @IsOptional()
  @IsDateString()
  eventDatetime: string;

  @IsNotEmpty()
  @IsUUID()
  eventTypeId: string;

  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
