import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SignUpPayload } from '../../models/authentication';
import { AuthenticationService } from '../../services/authentication.service';
import { SignUpStore } from './sign-up.store';

@Component({
    selector: "sign-up",
    templateUrl: "./sign-up.page.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpPage {
    formState$ = this.store.formState$;

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
            .pipe(catchError(error => of(error)))
            .subscribe(response =>
                this.store.setValue({
                    submitting: false,
                    response
                })
            );
    }

    onDestroy(payload: SignUpPayload) {
        this.store.setFormState(payload);
    }
}
