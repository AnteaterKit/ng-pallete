import { Directive } from "@angular/core";

@Directive({
  selector: '[menu-item]',
  exportAs: 'myMenuItem',
  host: {
    '[class.menu-item]': 'true',
    '(click)': 'clickMenuItem($event)'
  },
})
export class MenuItemDirective {
  
  clickMenuItem(e: MouseEvent): void {

  }
}
