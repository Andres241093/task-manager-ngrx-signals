import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { View1Component } from './components/view-1/view-1.component';
import { View2Component } from './components/view-2/view-2.component';
import { View3Component } from './components/view-3/view-3.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

export const routes: Routes = [
  {
    path: 'view-1',
    component: View1Component,
  },
  {
    path: 'view-2',
    component: View2Component,
  },
  {
    path: 'view-3',
    component: View3Component,
  },
  {
    path: '',
    component: TaskManagerComponent,
  },
];
