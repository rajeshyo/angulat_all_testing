import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CustomButtonComponent } from './shared/components/custom-button/custom-button.component';  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomButtonComponent],
 
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
