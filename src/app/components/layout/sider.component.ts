import { DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { fromEvent, merge, Subscription } from "rxjs";
import { auditTime } from "rxjs/operators";

enum RespondEvents {
  resize = 'resize',
  scroll = 'scroll',
  touchstart = 'touchstart',
  touchmove = 'touchmove',
  touchend = 'touchend',
  pageshow = 'pageshow',
  load = 'LOAD'
}

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
export class SiderComponent implements OnInit, OnChanges {
  @Input() width: string | number = 300;
  @Input() layout: any;
  @Input() collapsedWidth = 55;
  @Input() collapsed = false;
  @Output() collapsedChange: EventEmitter<boolean> = new EventEmitter();

  widthSetting: string | number;
  private positionChangeSubscription: Subscription = Subscription.EMPTY;
  private timeout?: number;
  private document: Document;

  constructor(private cdr: ChangeDetectorRef,  private ngZone: NgZone, @Inject(DOCUMENT) doc) {
    this.document = doc;
  }

  ngOnInit(): void {
    this.updateWidth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { layout } = changes;
    console.log(layout);
    if (layout) {
      this.registerListeners();
    }
  }

  registerListeners(): void {
    this.removeListeners();
    console.log(this.layout);
    this.positionChangeSubscription =
       merge(
        ...Object.keys(RespondEvents).map(evName => fromEvent(this.document, evName))
      )
        .pipe(auditTime(20))
        .subscribe(e => this.updatePosition(e as Event));
    this.timeout = setTimeout(() => this.updatePosition({} as Event));

  }

  removeListeners(): void {
    clearTimeout(this.timeout);
    this.positionChangeSubscription.unsubscribe();
  }

  updatePosition(e: Event): void {
   // console.log(this.document.pageYOffset);
   //this.document.pageYOffset;
    //el.
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

