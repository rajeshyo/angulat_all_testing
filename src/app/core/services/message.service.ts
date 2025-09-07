import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSource = new BehaviorSubject<string>(''); 
  currentMessage$ = this.messageSource.asObservable();
  private testmessageSource = new BehaviorSubject<string>(''); 
  testcurrentMessage$ = this.testmessageSource.asObservable();


  sendMessage(msg: string) {
    this.messageSource.next(msg);
  }


   testMessage(testmsg: string) {
    this.testmessageSource.next(testmsg);
  }


}
