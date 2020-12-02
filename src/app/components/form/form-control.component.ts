import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControlDirective, FormControlName, NgControl, NgModel } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

export type FormControlStatusType = 'success' | 'error' | 'warning' | 'validating' | null;

@Component({
  selector: 'form-control',
  exportAs: 'ngFormControl',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class='form-item-control'>
      <div class='form-item-control-content'>
        <ng-content></ng-content>
      </div>
      <div class='form-item-control-description'>
        {{status}}
      </div>
    </div>
  `
})
export class FormControlComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChild(NgControl, { static: false }) defaultValidateControl?: FormControlName | FormControlDirective;
  validateControl: AbstractControl | NgModel | null = null;
  private validateString: string | null = null;
  status: FormControlStatusType = null;
  private validateChanges: Subscription = Subscription.EMPTY;
  private destroyed$ = new Subject<void>();
  private autoErrorTip?: string;

  @Input()
  set validateStatus(value: string | AbstractControl | FormControlName | NgModel) {
    if (value instanceof AbstractControl || value instanceof NgModel) {
      this.validateControl = value;
      this.validateString = null;
      this.watchControl();
    } else if (value instanceof FormControlName) {
      this.validateControl = value.control;
      this.validateString = null;
      this.watchControl();
    } else {
      this.validateString = value;
      this.validateControl = null;
      this.setStatus();
    }
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  private setStatus(): void {
    this.status = this.getControlStatus(this.validateString);
  }

  private getControlStatus(validateString: string | null): FormControlStatusType {
    let status: FormControlStatusType;

    if (validateString === 'warning' || this.validateControlStatus('INVALID', 'warning')) {
      status = 'warning';
    } else if (validateString === 'error' || this.validateControlStatus('INVALID')) {
      status = 'error';
    } else if (validateString === 'validating' || validateString === 'pending' || this.validateControlStatus('PENDING')) {
      status = 'validating';
    } else if (validateString === 'success' || this.validateControlStatus('VALID')) {
      status = 'success';
    } else {
      status = null;
    }

    return status;
  }

  private watchControl(): void {
    this.validateChanges.unsubscribe();
    if (this.validateControl && this.validateControl.statusChanges) {
      this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null), takeUntil(this.destroyed$)).subscribe(_ => {
        this.updateAutoErrorTip();
        this.setStatus();
        this.cdr.markForCheck();
      });
    }
  }

  private validateControlStatus(validStatus: string, statusType?: FormControlStatusType): boolean {
    if (!this.validateControl) {
      return false;
    } else {
      const { dirty, touched, status } = this.validateControl;
      return (!!dirty || !!touched) && (statusType ? this.validateControl.hasError(statusType) : status === validStatus);
    }
  }

  private updateAutoErrorTip(): void {
    if (this.validateControl) {
      const errors = this.validateControl.errors || {};
      const autoErrorTip = '';
      // tslint:disable-next-line:forin
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
         // autoErrorTip =
           // errors[key]?.[this.localeId] ??
          //  this.nzAutoTips?.[this.localeId]?.[key] ??
          //  this.nzAutoTips.default?.[key] ??
          //  this.nzFormDirective?.nzAutoTips?.[this.localeId]?.[key] ??
          //  this.nzFormDirective?.nzAutoTips.default?.[key];
        }
       // if (!!autoErrorTip) {
       //   break;
       // }
      }
      this.autoErrorTip = autoErrorTip;
    }
  }

  ngAfterContentInit(): void {
      console.log('6876876');
    // if (!this.validateControl && !this.validateString) {
      if (this.defaultValidateControl instanceof FormControlDirective) {
        this.validateStatus = this.defaultValidateControl.control;
      } else {
        this.validateStatus = this.defaultValidateControl;
      }
    // }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
