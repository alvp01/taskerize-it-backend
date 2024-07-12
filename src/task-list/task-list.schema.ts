import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import * as mongoose from 'mongoose';
import { Task } from 'src/task/task.schema';

export type TaskListDocument = HydratedDocument<TaskList>

@Schema({ collection: 'tasklists', timestamps: true })
export class TaskList {
  @Prop({ required: true })
  name: string

  @Prop({type: [mongoose.Schema.Types.ObjectId], ref: 'Task'})
  tasks: Task[]
}

export const TaskListSchema = SchemaFactory.createForClass(TaskList)