import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog } from '../schemas/notification-log.schema';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(NotificationLog.name) private notificationLogModel: Model<NotificationLog>,
  ) {}

  async sendNotification(userId: string, type: string, channel: string, content: any): Promise<any> {
    const log = new this.notificationLogModel({
      userId,
      type,
      channel,
      status: 'pending',
      metadata: { content },
    });

    try {
      // Simulate sending (could integrate with actual notification services here)
      log.status = 'sent';
      log.sentAt = new Date();
    } catch (error) {
      log.status = 'failed';
      log.failureReason = error.message;
    }

    return log.save();
  }

  async getLogs(userId: string): Promise<NotificationLog[]> {
    return this.notificationLogModel.find({ userId }).exec();
  }
}
