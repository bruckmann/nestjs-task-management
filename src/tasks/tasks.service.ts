import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(createTaskDTO: CreateTaskDTO): Task {
    const {title, description} = createTaskDTO;
    const task: Task = {
      id: v1(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): void { 
   this.tasks = this.tasks.filter(task => task.id === id);
  }
}
