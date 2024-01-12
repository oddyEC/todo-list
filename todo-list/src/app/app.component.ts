import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 list: any = [
  {
    text: 'Pasear al perro',
    done: false,
  },
  {
    text: 'Sacar la basura',
    done: false,
  },
  {
    text: 'Lavar el carro',
    done: true,
  },
 ];

 applyValue(event:any){
  console.log(event);
  this.list[event.position].done = event.checked;
 }
}
