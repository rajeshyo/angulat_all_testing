import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CustomButtonComponent } from './shared/components/custom-button/custom-button.component';  
import { TodoListComponent } from './features/todo/todo-list/todo-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomButtonComponent,TodoListComponent],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular All Testing';


   constructor(
      private router: Router,
  
    ) {}
    goToChild() {
    this.router.navigate(['/child']);   // ✅ navigate to child page
  }
}
