import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ForgotPasswordSubmitPayload } from '../../models/authentication';

@Injectable({
    providedIn: "root"
})
export class ForgotPasswordSubmitStore {
    private readonly _isSubmitting = new BehaviorSubject<boolean>(false);

    private readonly _response = new BehaviorSubject<boolean>(null);

    private readonly _formState = new BehaviorSubject<
        ForgotPasswordSubmitPayload
    >(null);

    readonly formState$ = this._formState.asObservable();

    readonly isSubmitting$ = this._isSubmitting.asObservable();

    readonly response$ = this._response.asObservable();

    setFormState(value: ForgotPasswordSubmitPayload) {
        this._formState.next(value);
    }

    setResponse(value: any) {
        this._response.next(value);
    }

    setSubmitting(value: boolean) {
        this._isSubmitting.next(value);
    }
}
