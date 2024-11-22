import { IsEmail, IsEnum, IsNotEmpty, IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChannelsDto {
  @IsNotEmpty() email: boolean;
  @IsNotEmpty() sms: boolean;
  @IsNotEmpty() push: boolean;
}

export class PreferencesDto {
  @IsNotEmpty() marketing: boolean;
  @IsNotEmpty() newsletter: boolean;
  @IsNotEmpty() updates: boolean;

  @IsEnum(['daily', 'weekly', 'monthly', 'never'])
  frequency: 'daily' | 'weekly' | 'monthly' | 'never';

  @ValidateNested()
  @Type(() => ChannelsDto)
  channels: ChannelsDto;
}

export class CreatePreferenceDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEmail()
  email: string;

  @ValidateNested()
  @Type(() => PreferencesDto)
  preferences: PreferencesDto;

  @IsString()
  @IsNotEmpty()
  timezone: string;
}
