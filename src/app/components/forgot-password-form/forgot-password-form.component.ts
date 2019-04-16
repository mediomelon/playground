import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@mediomelon/ng-core';

import { ForgotPasswordStore } from '../../pages/forgot-password/forgot-password.store';

@Component({
    selector: "forgot-password-form",
    templateUrl: "./forgot-password-form.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordFormComponent extends FormBase
    implements OnInit, OnDestroy {
    @Input() state: string;

    constructor(formBuilder: FormBuilder, private store: ForgotPasswordStore) {
        super();
        this.form = formBuilder.group({
            username: ["", Validators.required]
        });
    }

    ngOnInit() {
        if (this.state) this.form.get("username").setValue(this.state);
    }

    ngOnDestroy() {
        this.store.setFormState(this.getFormValue());
    }

    getFormValue() {
        return this.form.value.username;
    }
}
