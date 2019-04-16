import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ForgotPasswordFormModule } from '../../components/forgot-password-form/forgot-password-form.module';
import { ResponseModule } from '../../components/response/response.module';
import { ForgotPasswordPage } from './forgot-password.page';

const COMMON_IMPORTS = [
    FlexLayoutModule,
    ForgotPasswordFormModule,
    CommonModule,
    ResponseModule
];

const COMMON_DECLARATIONS = [ForgotPasswordPage];

@NgModule({
    imports: [COMMON_IMPORTS],
    declarations: [COMMON_DECLARATIONS],
    exports: [COMMON_DECLARATIONS]
})
export class ForgotPasswordModule {}
