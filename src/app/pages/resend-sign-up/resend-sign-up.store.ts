import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Test } from 'src/app/models/test';
import { StorageService } from 'src/app/services/storage.service';

const KEY = "RESEND_SIGN_UP";

type ResendSignUpTest = Test<string>;

@Injectable({
    providedIn: "root"
})
export class ResendSignUpStore {
    private readonly _test = new BehaviorSubject<ResendSignUpTest>(null);

    private readonly _isSubmitting = new BehaviorSubject<boolean>(false);

    private readonly test$ = this._test.asObservable();

    readonly request$ = this.test$.pipe(
        map(test => (test ? test.request : null))
    );

    readonly response$ = this.test$.pipe(
        map(test => (test ? test.response : null))
    );

    readonly isSubmitting$ = this._isSubmitting.asObservable();

    constructor(private storage: StorageService) {
        this.storage.get(KEY).subscribe(value => {
            if (value) this.emitTest(value);
        });
    }

    setTest(test: ResendSignUpTest) {
        this.storage.set(KEY, test).subscribe(() => this.emitTest(test));
    }

    setSubmitting(payload: boolean) {
        this._isSubmitting.next(payload);
    }

    private emitTest(test: ResendSignUpTest) {
        this._test.next(test);
    }
}
