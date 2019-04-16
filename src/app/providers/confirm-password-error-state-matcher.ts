import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class ConfirmPasswordErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        const hasError = form && form.hasError('equals');
        return !!(control && (control.invalid || hasError) && (control.touched || isSubmitted));
    }
}