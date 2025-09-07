import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
// import { authGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  // { path: 'parent', component: ParentComponent, canActivate: [authGuard]},
    { path: 'parent', component: ParentComponent, },
  { path: 'child', component: ChildComponent, },
  { path: '', redirectTo: 'parent', pathMatch: 'full' }  // default
];
