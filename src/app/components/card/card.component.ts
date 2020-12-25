import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'uikit-card',
  exportAs: 'uiKitCard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class='ui-card'>
    <div class='ui-card-title'>
      <div class='ui-card-title-text h6'>
        {{title}}
      </div>
    </div>
    <div class='ui-card-content'>
        <ng-content></ng-content>
    </div>
    <div class='ui-card-actions' *ngIf='actions.length'>
      <span class='ui-card-actions__action' *ngFor='let action of actions'>
        <span>
          <ng-template [ngTemplateOutlet]="action"></ng-template>
        </span>
      </span>
    </div>
  </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  title = '';
  @Input()
  actions: Array<TemplateRef<void>> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
