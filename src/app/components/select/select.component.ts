import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, forwardRef, Input, OnInit, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { OptionComponent } from './option.component';
import { BehaviorSubject, merge } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'my-select',
  preserveWhitespaces: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container>
      <div class='select'>
        <input [value]='value.label' cdkOverlayOrigin #origin="cdkOverlayOrigin" disabled='true' />
        <div class='select-arrow'>
        </div>
      </div>
    </ng-container >
    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPanelClass]="dropdownClassName"
      [cdkConnectedOverlayWidth]='triggerWidth'
      [cdkConnectedOverlayMinWidth]='triggerWidth'
      (backdropClick)="setOpenState(false)"
      (detach)="setOpenState(false)"
      [cdkConnectedOverlayOpen]="open" >

      <div class='option-container-wrap'>
        <option-container
            [listOfContainerItem]="listOfContainerItem"
            [activatedValue]='activatedValue'
            [listOfSelectedValue]='listOfValue'
            [compareWith]="compareWith"
            (itemClick)='itemClick($event)'
          >
          </option-container>
      </div>
    </ng-template>
  `,
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '(click)': 'onHostClick()',
    '(keydown)': 'onHostKeydown($event)'
  }
})
export class SelectComponent implements  ControlValueAccessor, AfterContentInit, AfterViewInit, OnInit {

  constructor(private cdr: ChangeDetectorRef) { }
  dropdownClassName = 'dropdownClassName';
  triggerWidth: number | null = null;
  open = false;
  listOfContainerItem = [];
  activatedValue: any;
  listOfValue: any[] = [];
  value: any | any[] = {};

  @ContentChildren(OptionComponent, { descendants: true }) listOfOptionComponent!: QueryList<OptionComponent>;
  private listOfTemplateItem$ = new BehaviorSubject<any[]>([]);

  @ViewChild(CdkOverlayOrigin, { static: true, read: ElementRef }) originElement!: ElementRef;
  @ViewChild(CdkConnectedOverlay, { static: true }) cdkConnectedOverlay!: CdkConnectedOverlay;
  onChange = () => {};
  onTouched = () => {};

  @Input() compareWith: (o1: any, o2: any) => boolean = (o1: any, o2: any) => o1 === o2;


  ngOnInit(): void {
    this.listOfTemplateItem$
      .subscribe((listOfTemplateItem) => {
        this.updateListOfContainerItem(listOfTemplateItem);
    });
  }

  ngAfterViewInit(): void {
    this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
  }

  ngAfterContentInit(): void {
    this.listOfOptionComponent.changes
    .pipe(
      startWith(true),
      // takeUntil(this.destroy$)
    )
    .subscribe(() => {
      const listOfOptionInterface = this.listOfOptionComponent.toArray().map(item => {
        const { label, value } = item;
        return { label, value, type: 'item', key: value };
      });
      this.listOfTemplateItem$.next(listOfOptionInterface);
      this.cdr.markForCheck();
    });
  }

  updateListOfContainerItem(listOfTemplateItem: any[]): void {
    this.listOfContainerItem = listOfTemplateItem;
  }

  writeValue(modelValue: any): void {
    console.log(modelValue);
    if (this.value !== modelValue) {
      this.value = modelValue;
      this.listOfValue = [];
      this.listOfValue.push(modelValue);
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  onHostClick(): void {
    this.setOpenState(true);
  }

  itemClick(value): void {
    this.activatedValue = value;
    this.writeValue(value);
    this.setOpenState(false);
  }

  setOpenState(value: boolean): void {
    this.open = value;
    // this.nzOpenChange.emit(value);
    // this.onOpenChange();
    if ( this.cdkConnectedOverlay.overlayRef) {
      this.cdkConnectedOverlay.overlayRef.updatePosition();
    }
    this.cdr.markForCheck();
  }

}
