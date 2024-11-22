import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from '../schemas/user-preference.schema';
import { CreatePreferenceDto } from '../dto/create-preference.dto';

@Injectable()
export class UserPreferencesService {
  constructor(
    @InjectModel(UserPreference.name) private userPreferenceModel: Model<UserPreference>,
  ) {}

  async create(dto: CreatePreferenceDto): Promise<UserPreference> {
    const createdPreference = new this.userPreferenceModel(dto);
    return createdPreference.save();
  }

  async findOne(userId: string): Promise<UserPreference> {
    return this.userPreferenceModel.findOne({ userId }).exec();
  }

  async update(userId: string, dto: Partial<CreatePreferenceDto>): Promise<UserPreference> {
    return this.userPreferenceModel.findOneAndUpdate({ userId }, dto, { new: true }).exec();
  }

  async delete(userId: string): Promise<any> {
    return this.userPreferenceModel.deleteOne({ userId }).exec();
  }
}
