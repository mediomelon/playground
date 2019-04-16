import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CognitoLayout } from './layouts/cognito/cognito.layout';
import { CognitoLayoutModule } from './layouts/cognito/layout.module';
import { RestLayoutModule } from './layouts/rest/layout.module';
import { RestLayout } from './layouts/rest/rest.layout';
import { ConfirmSignUpModule } from './pages/confirm-sign-up/confirm-sign-up.module';
import { ConfirmSignUpPage } from './pages/confirm-sign-up/confirm-sign-up.page';
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
                path: "confirm-sign-up",
                component: ConfirmSignUpPage
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
        ConfirmSignUpModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
