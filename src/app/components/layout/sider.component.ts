import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'sider',
  exportAs: 'sider',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  template: `
    <div class='sider-content'>
        <ng-content></ng-content>
    </div>
    <div (click)='collapsedChanged()' class='sider-trigger'>
      <div >
        <div *ngIf='collapsed' >
          <img src='../../../assets/icons/open.svg' />
        </div>
        <div *ngIf='!collapsed'  >
        <img src='../../../assets/icons/close.svg' />
        </div>
      </div>
    </div>
  `,
  host: {
    '[class.sider]': 'true',
    '[style.maxWidth]': 'widthSetting',
    '[style.minWidth]': 'widthSetting',
    '[style.width]': 'widthSetting'
  }
})
export class SiderComponent implements OnInit {
  @Input() width: string | number = 300;
  @Input() collapsedWidth = 55;
  @Input() collapsed = false;
  @Output() collapsedChange: EventEmitter<boolean> = new EventEmitter();

  widthSetting: string | number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.updateWidth();
  }

  collapsedChanged(): void {
    this.collapsed = !this.collapsed;
    this.updateWidth();
    this.collapsedChangeEmit();
  }

  updateWidth(): void {
    this.widthSetting = this.collapsed ? `${this.collapsedWidth}px` : `${this.width}px`;
    console.log(this.widthSetting);
  }

  collapsedChangeEmit(): void {
    this.collapsedChange.emit(this.collapsed);
  }

}

