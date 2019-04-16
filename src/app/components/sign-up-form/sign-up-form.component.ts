import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@mediomelon/ng-core';

import { SignUpPayload } from '../../models/authentication';
import { SignUpStore } from '../../pages/sign-up/sign-up.store';

@Component({
    selector: "sign-up-form",
    templateUrl: "./sign-up-form.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent extends FormBase<SignUpPayload>
    implements OnInit, OnDestroy {
    @Input() state: SignUpPayload;

    constructor(private formBuilder: FormBuilder, private store: SignUpStore) {
        super();
    }

    ngOnInit() {
        let username = "";
        let password = "";
        let attributes = [];

        if (this.state) {
            username = this.state.username;
            password = this.state.password;
            attributes = this.state.attributes.map(attribute =>
                this.createAttributeFormGroup(attribute.name, attribute.value)
            );
        }

        this.form = this.formBuilder.group({
            username: [username, [Validators.required]],
            password: [password, Validators.required],
            attributes: this.formBuilder.array(attributes)
        });
    }

    ngOnDestroy() {
        this.store.setFormState(this.form.value);
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
