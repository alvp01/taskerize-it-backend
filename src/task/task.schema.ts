import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose';
import { TaskList } from 'src/task-list/task-list.schema';


export type TaskDocument = mongoose.HydratedDocument<Task>

@Schema({ collection: 'tasks', timestamps: true })
export class Task {
  @Prop({ required: true })
  name: string

  @Prop()
  description: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TaskList', required: true })
  taskList: TaskList
}

export const TaskSchema = SchemaFactory.createForClass(Task)