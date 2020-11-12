import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskservice.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskservice.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
    return this.taskservice.createTask(createTaskDTO);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void{
    this.taskservice.deleteTask(id);
  }
}
