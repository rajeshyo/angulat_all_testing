import { Component,OnInit} from '@angular/core';
import { MessageService } from '../core/services/message.service';
import { Router } from '@angular/router';
import {  CustomButtonComponent } from '../shared/components/custom-button/custom-button.component';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {
  message ="";
  testmessage ="";
  
  constructor(
    private msgService: MessageService,
    private router: Router,
  ) {}
  
 ngOnInit() {
    this.msgService.currentMessage$.subscribe(msg => {
      this.message = msg;
    });

    this.msgService.testcurrentMessage$.subscribe(testmsg => {
      this.testmessage = testmsg;
    });

  }

  goToParent() {
       this.router.navigate(['/parent']);   // ✅ navigate to child page
    console.log("ccccccccccccccccccccccccc")
  }
}
