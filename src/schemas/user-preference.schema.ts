import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class UserPreference extends Document {
  @Prop({ required: true, unique: true })
  userId: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({
    type: {
      marketing: { type: Boolean, required: true, default: false },
      newsletter: { type: Boolean, required: true, default: false },
      updates: { type: Boolean, required: true, default: true },
      frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'never'],
        required: true,
        default: 'daily',
      },
      channels: {
        email: { type: Boolean, required: true, default: true },
        sms: { type: Boolean, required: true, default: false },
        push: { type: Boolean, required: true, default: true },
      },
    },
    required: true,
  })
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
  };

  @Prop({ required: true })
  timezone: string;

  @Prop({ type: Date })
  lastUpdated: Date;
}

export const UserPreferenceSchema = SchemaFactory.createForClass(UserPreference);
