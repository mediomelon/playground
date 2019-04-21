import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@mediomelon/ng-core';

@Component({
    selector: "username-form",
    templateUrl: "./username-form.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsernameFormComponent extends FormBase implements OnChanges {
    @Input() state: string;

    constructor(formBuilder: FormBuilder) {
        super();
        this.form = formBuilder.group({
            username: ["", Validators.required]
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

        this.form.get("username").setValue(this.state);
    }

    getFormValue() {
        return this.form.value.username;
    }
}
