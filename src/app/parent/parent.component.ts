import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../core/services/message.service';
import { SharedModule } from '../shared/shared.module';
import { CustomButtonComponent } from '../shared/components/custom-button/custom-button.component';
import { TitlePipe } from '../shared/pipes/title.pipe';
import { ApiService } from '../core/services/api.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  imports: [CustomButtonComponent,TitlePipe],
  standalone: true,
})
export class ParentComponent {
  constructor(
    private router: Router,
    private msgService: MessageService,
    private api: ApiService
  ) {}



  load() {
    this.api.getData().subscribe(res => console.log(res));
  }

  goToChild() {
    this.router.navigate(['/child']);   // ✅ navigate to child page
  }


    sendMessage() {
    this.msgService.sendMessage("Hello Child, from Parent 👨");
    this.msgService.testMessage("Hello Test");
    this.router.navigate(['/child']);   // navigate after sending message
  }
  
}
