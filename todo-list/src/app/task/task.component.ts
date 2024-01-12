import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() text: string='';
  @Input() done: boolean=false;
  @Output() emitter: EventEmitter<any> = new EventEmitter<any>();


  onChange(event: any) {
    this.emitter.emit(event.target.checked);
  }

}
