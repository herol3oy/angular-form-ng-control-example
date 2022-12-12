import {ChangeDetectionStrategy, Component, Optional} from '@angular/core';
import {NgControl} from "@angular/forms";

@Component({
  selector: 'error-message',
  template: `<pre style="color: red">{{ error | json }}</pre>`,
})
export class ErrorMessageComponent {

  constructor(@Optional() private readonly ngControl: NgControl) {}

  get error(): { key: string; params: { [key: string]: string } } {
    const controlErrors = this.ngControl?.errors ?? {};
    const [key = '', params = {}] = Object.entries(controlErrors).pop() ?? [];
    return { key, params };
  }
}
