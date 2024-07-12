import { Controller, Post, Body, Get, Put, Delete, ValidationPipe, Param } from '@nestjs/common';
import { TaskListService } from './task-list.service';
import { CreateTaskListDto } from './dto/create-task-list.dto';
import { TaskList } from './task-list.schema';


@Controller('task-lists')
export class TaskListController {

  constructor(private taskListService: TaskListService) {}

  @Post()
  async create(
    @Body(new ValidationPipe())
    taskList: CreateTaskListDto): Promise<TaskList> {
    return await this.taskListService.create(taskList);
  }

  @Get()
  async index(): Promise<TaskList[]> {
    return await this.taskListService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe())
    taskList: TaskList): Promise<TaskList>{
    return await this.taskListService.update(id, taskList);
  }

  @Delete(':id')
  async destroy(
    @Param('id')
    id: string): Promise<TaskList> {
    return await this.taskListService.delete(id);
  }
}
