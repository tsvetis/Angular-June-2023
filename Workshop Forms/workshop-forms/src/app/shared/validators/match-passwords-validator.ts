import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(
  passwordCtrlOne: string,
  passwordCtrlTwo: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const passCtrl1 = group.get(passwordCtrlOne);
    const passCtrl2 = group.get(passwordCtrlTwo);

    return passCtrl1?.value === passCtrl2?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}
