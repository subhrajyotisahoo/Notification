import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPreferencesModule } from './user-preferences/user-preferences.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://codinghero007:Subhra1234@cluster0.ir4nu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    UserPreferencesModule,
  ],
})
export class AppModule {}
