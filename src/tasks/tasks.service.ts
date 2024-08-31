import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return ['Task 1', 'Task 2', 'Task 3'];
  }

  createTasks() {
    return 'Creando tareas';
  }

  updateTasks() {
    return 'Actualizando tareas';
  }

  deleteTasks() {
    return 'Borrando tareas';
  }

  updateTasksStatus() {
    return 'Actualizando estatus de las tareas';
  }
}
