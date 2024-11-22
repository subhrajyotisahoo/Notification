import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserPreferencesService } from './user-preferences.service';
import { CreatePreferenceDto } from '../dto/create-preference.dto';

@Controller('preferences')
export class UserPreferencesController {
  constructor(private readonly userPreferencesService: UserPreferencesService) {}

  @Post()
  create(@Body() createDto: CreatePreferenceDto) {
    return this.userPreferencesService.create(createDto);
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.userPreferencesService.findOne(userId);
  }

  @Patch(':userId')
  update(@Param('userId') userId: string, @Body() updateDto: Partial<CreatePreferenceDto>) {
    return this.userPreferencesService.update(userId, updateDto);
  }

  @Delete(':userId')
  delete(@Param('userId') userId: string) {
    return this.userPreferencesService.delete(userId);
  }
}
