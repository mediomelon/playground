import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ResponseModule } from '../../components/response/response.module';
import { UsernameFormModule } from '../../components/username-form/username-form.module';
import { ForgotPasswordPage } from './forgot-password.page';

const COMMON_IMPORTS = [
    FlexLayoutModule,
    UsernameFormModule,
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
