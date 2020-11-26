import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[menu]',
  exportAs: 'myMenu',
  host: {
    '[class.menu]': 'true',
    '[class.menu-collapsed]': 'collapsed'
  }
})
export class MenuDirective implements OnChanges {
  @Input() collapsed = false;

  ngOnChanges(changes: SimpleChanges): void {
    const { collapsed } = changes;
  }
}
