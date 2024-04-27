import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Task {
  title: string;
  details: string;
  done: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  taskTitle = new FormControl('');
  taskDetails = new FormControl('');
  tasks: Task[] = [];

  addTask() {
    if (
      this.taskTitle.value?.trim() !== '' &&
      this.taskDetails.value?.trim() !== ''
    ) {
      const newTask: Task = {
        title: this.taskTitle.value!,
        details: this.taskDetails.value!,
        done: false,
      };
      this.tasks.unshift(newTask);
      this.taskTitle.setValue('');
      this.taskDetails.setValue('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  editTask(task: Task) {
    const newTaskTitle = prompt('Editar título:', task.title);
    const newTaskDetails = prompt('Editar detalhes:', task.details);
    if (newTaskTitle !== null && newTaskDetails !== null) {
      task.title = newTaskTitle;
      task.details = newTaskDetails;
    }
  }

  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  toggleDone(task: Task) {
    task.done = !task.done;
  }
}
