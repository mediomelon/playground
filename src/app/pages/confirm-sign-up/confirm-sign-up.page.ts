import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConfirmSignUpPayload } from '../../models/authentication';
import { AuthenticationService } from '../../services/authentication.service';
import { ConfirmSignUpStore } from './confirm-sign-up.store';

@Component({
    selector: "confirm-sign-up",
    templateUrl: "./confirm-sign-up.page.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmSignUpPage {
    isSubmitting$ = this.store.isSubmitting$;
    response$ = this.store.response$;

    constructor(
        private store: ConfirmSignUpStore,
        private authenticationService: AuthenticationService
    ) {}

    onSubmit(payload: ConfirmSignUpPayload) {
        this.store.setSubmitting(true);
        this.authenticationService
            .confirmSignUp(payload)
            .pipe(catchError(error => of(error)))
            .subscribe(response =>
                this.store.setValue({
                    submitting: false,
                    response
                })
            );
    }
}
