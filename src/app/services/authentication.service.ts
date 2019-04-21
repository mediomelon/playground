import { Injectable } from '@angular/core';
import { AuthClass } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';
import { from } from 'rxjs';

import { ConfirmSignUpPayload, ForgotPasswordSubmitPayload, SignUpPayload } from '../models/authentication';
import { CognitoConfig } from '../models/config';

@Injectable({
    providedIn: "root"
})
export class AuthenticationService {
    private auth: AuthClass;

    constructor(amplify: AmplifyService) {
        this.auth = amplify.auth();
    }

    setConfig(config: CognitoConfig) {
        this.auth.configure(config);
    }

    signUp({ username, password, attributes }: SignUpPayload) {
        const customAttributes = attributes.reduce(
            (attributes, attribute) => ({
                ...attributes,
                [attribute.name]: attribute.value
            }),
            {}
        );

        return from(
            this.auth.signUp({
                username,
                password,
                attributes: customAttributes
            })
        );
    }

    resendSignUp(username: string) {
        return from(this.auth.resendSignUp(username));
    }

    confirmSignUp({ username, code }: ConfirmSignUpPayload) {
        return from(this.auth.confirmSignUp(username, code));
    }

    forgotPassword(username: string) {
        return from(this.auth.forgotPassword(username));
    }

    forgotPasswordSubmit({
        username,
        code,
        password
    }: ForgotPasswordSubmitPayload) {
        return from(this.auth.forgotPasswordSubmit(username, code, password));
    }
}
