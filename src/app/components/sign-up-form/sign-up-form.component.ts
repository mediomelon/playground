import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@mediomelon/ng-core';

@Component({
    selector: "sign-up-form",
    templateUrl: "./sign-up-form.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent extends FormBase {
    constructor(private formBuilder: FormBuilder) {
        super();

        this.form = formBuilder.group({
            username: ["", [Validators.required]],
            password: ["", Validators.required],
            attributes: formBuilder.array([])
        });
    }

    onAddAttribute() {
        const formArray = this.attributes;
        const group = this.formBuilder.group({
            name: ["", Validators.required],
            value: ["", Validators.required]
        });
        formArray.push(group);
    }

    onRemoveAttribute(index: number) {
        const formArray = this.attributes;
        formArray.removeAt(index);
    }

    get attributes(): FormArray {
        return this.form.get("attributes") as FormArray;
    }
}
