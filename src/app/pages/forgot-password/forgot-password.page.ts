import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { createTest } from 'src/app/utils';

import { AuthenticationService } from '../../services/authentication.service';
import { ForgotPasswordStore } from './forgot-password.store';

@Component({
    selector: "forgot-password",
    templateUrl: "./forgot-password.page.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordPage {
    formState$ = this.store.request$;

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
            .pipe(
                map(response => createTest(payload, response, "success")),
                catchError(error => of(createTest(payload, error, "error")))
            )
            .subscribe(test => {
                this.store.setSubmitting(false);
                this.store.setTest(test);
            });
    }
}
