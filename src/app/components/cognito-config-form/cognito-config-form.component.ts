import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '@mediomelon/ng-core';

import { IDENTITY_POOL_ID_REGEX, REGION_REGEX, USER_POOL_ID_REGEX, USER_POOL_WEB_CLIENT_ID_REGEX } from '../../constants';
import { CognitoConfig } from '../../models/config';

@Component({
    selector: "cognito-config-form",
    templateUrl: "./cognito-config-form.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CognitoConfigFormComponent extends FormBase implements OnInit {
    @Input() config: CognitoConfig;

    constructor(formBuilder: FormBuilder) {
        super();
        this.form = formBuilder.group({
            identityPoolId: [
                "",
                [
                    Validators.required,
                    Validators.pattern(IDENTITY_POOL_ID_REGEX)
                ]
            ],
            region: [
                "",
                [Validators.required, Validators.pattern(REGION_REGEX)]
            ],
            userPoolId: [
                "",
                [Validators.required, Validators.pattern(USER_POOL_ID_REGEX)]
            ],
            userPoolWebClientId: [
                "",
                [
                    Validators.required,
                    Validators.pattern(USER_POOL_WEB_CLIENT_ID_REGEX)
                ]
            ]
        });
    }

    ngOnInit() {
        if (this.config) this.form.patchValue(this.config);
    }
}
