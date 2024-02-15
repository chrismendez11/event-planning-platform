import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @IsString()
  eventName?: string;

  @IsOptional()
  @IsString()
  eventDescription?: string;

  @IsOptional()
  @IsString()
  eventLocation?: string;

  @IsOptional()
  @IsDateString()
  eventDatetime?: string;

  @IsOptional()
  @IsUUID()
  eventTypeId?: string;
}
