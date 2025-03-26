import { computed } from '@angular/core';
import { signalState, patchState } from '@ngrx/signals';

interface TodoState {
  todos: { id: number; text: string; completed: boolean }[];
  filter: 'all' | 'pending' | 'completed';
}

const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

const todoStore = signalState(initialState);

export const pendingCount = () => {
  return todoStore.todos().filter((todo) => !todo.completed).length;
};

export const filteredTodos = () => {
  return todoStore
    .todos()
    .filter(
      (todo) =>
        todoStore.filter() === 'all' ||
        (todoStore.filter() === 'completed' && todo.completed) ||
        (todoStore.filter() === 'pending' && !todo.completed)
    );
};

export const addTodo = (text: string) => {
  const newTodo = { id: Date.now(), text, completed: false };
  patchState(todoStore, (state) => ({
    ...state,
    todos: [...state.todos, newTodo],
  }));
};

export const toggleTodo = (id: number) => {
  patchState(todoStore, (state) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  }));
};

export const setFilter = (filter: TodoState['filter']) => {
  patchState(todoStore, { filter });
};
