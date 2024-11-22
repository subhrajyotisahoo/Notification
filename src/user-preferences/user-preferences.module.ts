import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPreferencesService } from './user-preferences.service';
import { UserPreferencesController } from './user-preferences.controller';
import { UserPreference, UserPreferenceSchema } from 'src/schemas/user-preference.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: UserPreference.name, schema: UserPreferenceSchema }])],
  controllers: [UserPreferencesController],
  providers: [UserPreferencesService],
})
export class UserPreferencesModule {}
