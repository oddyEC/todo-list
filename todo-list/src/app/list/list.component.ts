import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input () list: any[]=[];
  @Output () emitter: EventEmitter<any> = new EventEmitter<any>();

  emitValue(event:boolean, i: number){
    console.log(event, i);
    this.emitter.emit({
      checked: event,
      position: i,
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
