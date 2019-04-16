import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { SignUpPayload } from '../../models/authentication';

interface Store {
    submitting: boolean;
    response: any;
}

@Injectable({
    providedIn: "root"
})
export class SignUpStore {
    private readonly _value = new BehaviorSubject<Store>({
        submitting: false,
        response: null
    });

    private readonly _formState = new BehaviorSubject<SignUpPayload>(null);

    readonly formState$ = this._formState.asObservable();

    private readonly value$ = this._value.asObservable();

    isSubmitting$ = this.value$.pipe(map(value => value.submitting));

    response$ = this.value$.pipe(map(value => value.response));

    private getValue() {
        return this._value.getValue();
    }

    setFormState(value: SignUpPayload) {
        this._formState.next(value);
    }

    setValue(value: Store) {
        this._value.next(value);
    }

    setSubmitting(value: boolean) {
        this.setValue({ ...this.getValue(), submitting: value });
    }
}
