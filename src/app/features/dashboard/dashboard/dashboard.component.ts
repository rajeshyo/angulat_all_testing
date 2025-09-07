import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';
import { TodoListComponent } from '../../todo/todo-list/todo-list.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  
  goToChild() {
    this.router.navigate(['/child']);   // ✅ navigate to child page
  }

}
