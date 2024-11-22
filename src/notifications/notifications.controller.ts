import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('/send')
  sendNotification(@Body() body: any) {
    const { userId, type, channel, content } = body;
    return this.notificationsService.sendNotification(userId, type, channel, content);
  }

  @Get('/:userId/logs')
  getLogs(@Param('userId') userId: string) {
    return this.notificationsService.getLogs(userId);
  }
}
