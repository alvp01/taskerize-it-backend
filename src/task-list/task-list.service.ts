import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskList } from './task-list.schema';
import { CreateTaskListDto } from './dto/create-task-list.dto';

@Injectable()
export class TaskListService {
  constructor(@InjectModel(TaskList.name) private taskModel: Model<TaskList>) {}

  async findAll(): Promise<TaskList[]> {
    return await this.taskModel.find().exec();
  }

  async create(task: CreateTaskListDto): Promise<TaskList> {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  }

  async update(id: string, task: TaskList): Promise<TaskList> {
    return await this.taskModel.findByIdAndUpdate(id, task, { new: true }).exec();
  }

  async delete(id: string): Promise<TaskList> {
    return await this.taskModel.findByIdAndDelete(id).exec();
  }

  async findOne(id: string): Promise<TaskList> {
    return await this.taskModel.findById(id).exec();
  }
}
