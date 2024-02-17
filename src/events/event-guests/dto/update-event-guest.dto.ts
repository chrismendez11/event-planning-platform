import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateEventGuestDto {
  @IsOptional()
  @IsString()
  eventGuestName?: string;

  @IsOptional()
  @IsString()
  eventGuestEmail?: string;

  @IsOptional()
  @IsString()
  eventGuestPhone?: string;

  @IsOptional()
  @IsBoolean()
  eventGuestInvitationSent?: boolean;
}
