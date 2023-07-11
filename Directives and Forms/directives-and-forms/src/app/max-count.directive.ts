import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaxCountDirective,
      multi: true,
    },
  ],
})
export class MaxCountDirective implements Validator {
  @Input() appMaxCount: number | undefined;

  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (
      this.appMaxCount === undefined ||
      (control.value?.length || 0) <= this.appMaxCount
    ) {
      return null;
    }

    return {
      appMaxCount: this.appMaxCount,
    };
  }
}
