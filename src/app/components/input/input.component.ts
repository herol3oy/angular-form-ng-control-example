import {Component, Input} from '@angular/core';
import {BaseControl} from "../../directives/base-input.component";
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent extends BaseControl {
  @Input() type: 'text' | 'number' = 'text';

  writeValue(obj: any): void {
    this.value = obj;
  }

  emitValueChange(target: any): void {
    this.onChangeCallback(target['value']);
  }
}
