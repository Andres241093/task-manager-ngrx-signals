import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  addTodo,
  toggleTodo,
  filteredTodos,
  pendingCount,
  setFilter,
} from '../../store/todo.store';

@Component({
  selector: 'app-task-manager',
  imports: [NgFor, FormsModule, MatInputModule, MatSelectModule],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss',
})
export class TaskManagerComponent {
  newTodo = '';

  setFilter(value: 'all' | 'pending' | 'completed' | null): void {
    value ? setFilter(value) : null;
  }

  addTodo() {
    if (this.newTodo.trim()) {
      addTodo(this.newTodo);
      this.newTodo = '';
    }
  }

  toggleTodo(id: number) {
    toggleTodo(id);
  }

  filteredTodos(): {
    id: number;
    text: string;
    completed: boolean;
  }[] {
    return filteredTodos();
  }

  pendingCount(): number {
    return pendingCount();
  }
}
