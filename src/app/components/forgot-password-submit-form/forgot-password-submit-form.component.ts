import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@mediomelon/ng-core';

import { ForgotPasswordSubmitPayload } from '../../models/authentication';
import { ForgotPasswordSubmitStore } from '../../pages/forgot-password-submit/forgot-password-submit.store';

@Component({
    selector: "forgot-password-submit-form",
    templateUrl: "./forgot-password-submit-form.component.html"
})
export class ForgotPasswordSubmitFormComponent extends FormBase
    implements OnInit, OnDestroy {
    @Input() state: ForgotPasswordSubmitPayload;

    constructor(
        formBuilder: FormBuilder,
        private store: ForgotPasswordSubmitStore
    ) {
        super();
        this.form = formBuilder.group({
            username: ["", Validators.required],
            code: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    ngOnInit() {
        if (this.state) this.form.patchValue(this.state);
    }

    ngOnDestroy() {
        this.store.setFormState(this.form.value);
    }
}
