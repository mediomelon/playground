import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResponseModule } from 'src/app/components/response/response.module';
import { UsernameFormModule } from 'src/app/components/username-form/username-form.module';

import { ResendSignUpPage } from './resend-sign-up.page';

const COMMON_IMPORTS = [
    FlexLayoutModule,
    CommonModule,
    ResponseModule,
    UsernameFormModule
];

const COMMON_DECLARATIONS = [ResendSignUpPage];

@NgModule({
    imports: [COMMON_IMPORTS],
    declarations: [COMMON_DECLARATIONS],
    exports: [COMMON_DECLARATIONS]
})
export class ResendSignUpModule {}
