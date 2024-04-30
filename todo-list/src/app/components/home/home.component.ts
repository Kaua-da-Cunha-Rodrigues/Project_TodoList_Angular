import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

interface Task {
  title: string;
  details: string;
  done: boolean;
}
@Component({
    selector: 'app-home',  
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: true,
    imports: [
      CommonModule, 
      ReactiveFormsModule,
      HeaderComponent,
      FooterComponent
    ]
  })
  
export class HomeComponent implements OnInit{

  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  taskTitle: FormControl = new FormControl();
  taskDetails: FormControl = new FormControl();
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
  
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
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
      this.tasks.unshift(task);
      this.taskTitle.setValue('');
      this.taskDetails.setValue('');

      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    } else {
    alert('Por favor, preencha todos os campos.');
  }
  }
  
  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    } else {
    this.taskTitle.setValue('');
    this.taskDetails.setValue('');

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
   alert('Por favor, preencha todos os campos.');
  }
  }
  
  toggleDone(task: Task) {
    task.done = !task.done;
  }
}
