import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  qty = 0;
  title = 'pallete';
  val = 3;
  collapsed = false;

  add() {
    this.qty++;
  }

  collapsedChange($event) {
    console.log($event);
    this.collapsed = $event;
  }
  
}
