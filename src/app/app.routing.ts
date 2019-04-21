import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CognitoLayout } from './layouts/cognito/cognito.layout';
import { CognitoLayoutModule } from './layouts/cognito/layout.module';
import { RestLayoutModule } from './layouts/rest/layout.module';
import { RestLayout } from './layouts/rest/rest.layout';
import { ConfirmSignUpModule } from './pages/confirm-sign-up/confirm-sign-up.module';
import { ConfirmSignUpPage } from './pages/confirm-sign-up/confirm-sign-up.page';
import { ForgotPasswordSubmitModule } from './pages/forgot-password-submit/forgot-password-submit.module';
import { ForgotPasswordSubmitPage } from './pages/forgot-password-submit/forgot-password-submit.page';
import { ForgotPasswordModule } from './pages/forgot-password/forgot-password.module';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { ResendSignUpModule } from './pages/resend-sign-up/resend-sign-up.module';
import { ResendSignUpPage } from './pages/resend-sign-up/resend-sign-up.page';
import { SignUpModule } from './pages/sign-up/sign-up.module';
import { SignUpPage } from './pages/sign-up/sign-up.page';

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "cognito"
    },
    {
        path: "cognito",
        component: CognitoLayout,
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "sign-up"
            },
            {
                path: "sign-up",
                component: SignUpPage
            },
            {
                path: "resend-sign-up",
                component: ResendSignUpPage
            },
            {
                path: "confirm-sign-up",
                component: ConfirmSignUpPage
            },
            {
                path: "forgot-password",
                component: ForgotPasswordPage
            },
            {
                path: "forgot-password-submit",
                component: ForgotPasswordSubmitPage
            }
        ]
    },
    {
        path: "rest",
        component: RestLayout
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CognitoLayoutModule,
        RestLayoutModule,
        SignUpModule,
        ResendSignUpModule,
        ConfirmSignUpModule,
        ForgotPasswordModule,
        ForgotPasswordSubmitModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
