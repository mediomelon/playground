import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { createTest } from 'src/app/utils';

import { SignUpPayload } from '../../models/authentication';
import { AuthenticationService } from '../../services/authentication.service';
import { SignUpStore } from './sign-up.store';

@Component({
    selector: "sign-up",
    templateUrl: "./sign-up.page.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpPage {
    formState$ = this.store.request$;

    isSubmitting$ = this.store.isSubmitting$;

    response$ = this.store.response$;

    constructor(
        private authenticationService: AuthenticationService,
        private store: SignUpStore
    ) {}

    onSubmit(payload: SignUpPayload) {
        this.store.setSubmitting(true);
        this.authenticationService
            .signUp(payload)
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
