import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskList, TaskListSchema } from './task-list.schema';
import { TaskListService } from './task-list.service';
import { TaskListController } from './task-list.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'TaskList', schema: TaskListSchema }]),
  ],
  controllers: [TaskListController],
  providers: [TaskListService],
})
export class TaskListModule {}
