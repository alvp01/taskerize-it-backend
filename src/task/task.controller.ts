import { Controller, Post, Body, Get, Put, Delete, ValidationPipe, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.schema';


@Controller('tasks')
export class TaskController {
  constructor(private TaskService: TaskService) {}

  @Post()
  async create(
    @Body(new ValidationPipe())
    task: CreateTaskDto
  ): Promise<Task> {
    return await this.TaskService.create(task);
  }

  @Get()
  async index(): Promise<Task[]> {
    return await this.TaskService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) task: UpdateTaskDto
  ): Promise<Task> {
    return await this.TaskService.update(id, task);
  }

  @Get(':id')
  async show(
    @Param('id')
    id: string): Promise<Task> {
    return await this.TaskService.findOne(id);
  }

  @Delete(':id')
  async destroy(
    @Param('id')
    id: string): Promise<Task> {
    return await this.TaskService.delete(id);
  }
}
