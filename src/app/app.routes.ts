import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { TodoListComponent } from './features/todo/todo-list/todo-list.component';
import { TodoFormComponent } from './features/todo/todo-form/todo-form.component';
export const routes: Routes = [
  // { path: 'parent', component: ParentComponent, canActivate: [authGuard]},

  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent, },
  { path: 'child', component: ChildComponent, },
  { path: 'todolist', component: TodoListComponent, },
  { path: 'todoform', component: TodoFormComponent, },
  // { path: '', redirectTo: 'parent', pathMatch: 'full' }  // default
];
