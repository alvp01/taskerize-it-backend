import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './task.schema';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskListSchema } from 'src/task-list/task-list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Task.name,
        schema: TaskSchema }
    ]),
    MongooseModule.forFeature([
      { name: 'TaskList',
        schema: TaskListSchema }
    ]),
  ],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
