import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../../services/authentication.service';
import { ForgotPasswordStore } from './forgot-password.store';

@Component({
    selector: "forgot-password",
    templateUrl: "./forgot-password.page.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordPage {
    formState$ = this.store.formState$;

    isSubmitting$ = this.store.isSubmitting$;

    response$ = this.store.response$;

    constructor(
        private authenticationService: AuthenticationService,
        private store: ForgotPasswordStore
    ) {}

    onSubmit(payload: string) {
        this.store.setSubmitting(true);
        this.authenticationService
            .forgotPassword(payload)
            .pipe(catchError(error => of(error)))
            .subscribe(response => {
                this.store.setResponse(response);
                this.store.setSubmitting(false);
            });
    }
}
