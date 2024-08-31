import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TaskController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask() {
    return this.tasksService.createTasks();
  }

  @Put()
  updateTask() {
    return this.tasksService.updateTasks();
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTasks();
  }

  @Patch() // El metodo patch solo actualiza una porcion espeficica del objeto, a diferencia de Put, que actualiza el objeto entero
  updateTaskStatus() {
    return this.tasksService.updateTasksStatus();
  }
}
