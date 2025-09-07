import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  standalone  : true,
  imports: [CommonModule],
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit,OnDestroy{
  @Input() label: string = 'Click Me bal ta';  // reusable label
  @Input() color: string = 'primary';   // style class
  @Output() clicked = new EventEmitter<void>();


  gradient:string = "";
  private intervalId: any;

 ngOnInit() {
    this.intervalId = setInterval(() => {
      this.gradient = `linear-gradient(0deg, ${this.randomColor()} 14%, ${this.randomColor()} 100%)`;
    }, 5000);
  }
   private randomColor(): string {
    return `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},1)`;
  }

  onClick() {
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiii")
    this.clicked.emit();
  }

  

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
