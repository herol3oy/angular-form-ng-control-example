import { Directive, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Directive()
export abstract class BaseControl implements ControlValueAccessor {
  public static readonly NOOP = () => {};

  @Input() required: string | undefined = undefined;
  @Input() label: string = '';

  value: any;
  onChangeCallback: Function = BaseControl.NOOP;
  onTouchedCallback: Function = BaseControl.NOOP;

  isDisabled: boolean = false;

  get isRequired() {
    return !!this.required || this.required === '';
  }

  get isInvalid() {
    return this.ngControl?.touched && this.ngControl?.invalid;
  }

  constructor(@Optional() @Self() public readonly ngControl: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  abstract writeValue(obj: any): void;

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
