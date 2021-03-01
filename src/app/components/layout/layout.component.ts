import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, QueryList, ViewChild, ViewEncapsulation } from "@angular/core";
import { SiderComponent } from './sider.component';

@Component({
  selector: 'layout',
  exportAs: 'layout',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  template: `<ng-content></ng-content>`,
  host: {
    '[class.layout-has-sider]': 'listOfShSiderComponent.length > 0',
    '[class.layout]': 'true'
  }
})
export class LayoutComponent {
  @ContentChildren(SiderComponent) listOfShSiderComponent!: QueryList<SiderComponent>;
}
