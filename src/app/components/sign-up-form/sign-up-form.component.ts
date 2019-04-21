import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@mediomelon/ng-core';

import { SignUpPayload } from '../../models/authentication';

@Component({
    selector: "sign-up-form",
    templateUrl: "./sign-up-form.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent extends FormBase<SignUpPayload>
    implements OnChanges {
    @Input() state: SignUpPayload;

    constructor(private formBuilder: FormBuilder) {
        super();

        this.form = formBuilder.group({
            username: ["", Validators.required],
            password: ["", Validators.required],
            attributes: formBuilder.array([])
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        const { state } = changes;

        if (
            !state ||
            !state.currentValue ||
            state.currentValue == state.previousValue
        )
            return;

        const username = this.state.username;
        const password = this.state.password;
        const attributes = this.state.attributes.map(attribute =>
            this.createAttributeFormGroup(attribute.name, attribute.value)
        );

        this.form = this.formBuilder.group({
            username: [username, [Validators.required]],
            password: [password, Validators.required],
            attributes: this.formBuilder.array(attributes)
        });
    }

    onAddAttribute() {
        const formArray = this.attributes;
        const group = this.createAttributeFormGroup();
        formArray.push(group);
    }

    onRemoveAttribute(index: number) {
        const formArray = this.attributes;
        formArray.removeAt(index);
    }

    get attributes(): FormArray {
        return this.form.get("attributes") as FormArray;
    }

    private createAttributeFormGroup(name: string = "", value: string = "") {
        return this.formBuilder.group({
            name: [name, Validators.required],
            value: [value, Validators.required]
        });
    }
}
