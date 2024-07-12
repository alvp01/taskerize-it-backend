import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskList } from 'src/task-list/task-list.schema';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<Task>,
    @InjectModel(TaskList.name) private taskListModel: Model<TaskList>
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async create(task: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(task);
    await createdTask.save()

    const taskList = await this.taskListModel.findById(task.taskList).exec();
    taskList.tasks.push(createdTask);
    await taskList.save();
    
    return createdTask;
  }

  async update(id: string, task: UpdateTaskDto): Promise<Task> {
    return await this.taskModel.findByIdAndUpdate(id, task, { new: true }).exec();
  }

  async delete(id: string): Promise<Task> {
    return await this.taskModel.findByIdAndDelete(id).exec();
  }

  async findOne(id: string): Promise<Task> {
    return await this.taskModel.findById(id).exec();
  }
}
