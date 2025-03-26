import { Component, inject } from '@angular/core';
import {
  addTodo,
  toggleTodo,
  filteredTodos,
  pendingCount,
  setFilter,
} from './store/todo.store';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-root',
  imports: [NgFor, FormsModule, MatInputModule, MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
