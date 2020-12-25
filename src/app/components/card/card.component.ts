import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'uikit-card',
  exportAs: 'uiKitCard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class='card-title'>
      {{title}}
    </div>
    <div class='card-content'>
      <ng-content></ng-content>
    </div>
    <div class='card-actions' *ngIf='actions.length'>
      <span *ngFor='let action of actions'>
      <span><ng-template [ngTemplateOutlet]="action"></ng-template></span>
      </span>
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
