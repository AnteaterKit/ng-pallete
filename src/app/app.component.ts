import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  collapsed = false;
  showMenu = false;

  constructor(private routing: Router) {
    this.routing.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event);
        if (event.url.indexOf('landing') === -1) {
          this.showMenu = true;
        }
      }
    });
  }

  collapsedChange($event) {
    console.log($event);
    this.collapsed = $event;
  }
}
