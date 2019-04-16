import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ForgotPasswordSubmitPayload } from '../../models/authentication';
import { AuthenticationService } from '../../services/authentication.service';
import { ForgotPasswordSubmitStore } from './forgot-password-submit.store';

@Component({
    selector: "forgot-password-submit",
    templateUrl: "./forgot-password-submit.page.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordSubmitPage {
    formState$ = this.store.formState$;

    isSubmitting$ = this.store.isSubmitting$;

    response$ = this.store.response$;

    constructor(
        private authenticationService: AuthenticationService,
        private store: ForgotPasswordSubmitStore
    ) {}

    onSubmit(payload: ForgotPasswordSubmitPayload) {
        this.store.setSubmitting(true);
        this.authenticationService
            .forgotPasswordSubmit(payload)
            .pipe(catchError(error => of(error)))
            .subscribe(response => {
                this.store.setResponse(response);
                this.store.setSubmitting(false);
            });
    }
}
