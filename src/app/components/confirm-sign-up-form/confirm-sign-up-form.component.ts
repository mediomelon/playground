import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@mediomelon/ng-core';

@Component({
    selector: "confirm-sign-up-form",
    templateUrl: "./confirm-sign-up-form.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmSignUpFormComponent extends FormBase {
    constructor(formBuilder: FormBuilder) {
        super();
        this.form = formBuilder.group({
            username: ["", Validators.required],
            code: ["", Validators.required]
        });
    }
}
