import {Component, Optional, Self} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NgControl, Validators} from "@angular/forms";
import {BaseControl} from "./directives/base-input.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends BaseControl {
  constructor(@Optional() @Self() ngControl: NgControl) {
    super(ngControl);
  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  myForm: FormGroup = new FormGroup({
    firstName: new FormControl('')
  })
}
