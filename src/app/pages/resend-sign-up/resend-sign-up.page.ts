import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { createTest } from 'src/app/utils';

import { ResendSignUpStore } from './resend-sign-up.store';

@Component({
    selector: "resend-sign-up",
    templateUrl: "./resend-sign-up.page.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResendSignUpPage {
    formState$ = this.store.request$;

    isSubmitting$ = this.store.isSubmitting$;

    response$ = this.store.response$;

    constructor(
        private authenticationService: AuthenticationService,
        private store: ResendSignUpStore
    ) {}

    onSubmit(payload: string) {
        this.store.setSubmitting(true);
        this.authenticationService
            .resendSignUp(payload)
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
