import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ConfirmSignUpFormModule } from '../../components/confirm-sign-up-form/confirm-sign-up-form.module';
import { ConfirmSignUpPage } from './confirm-sign-up.page';

const COMMON_IMPORTS = [
    FlexLayoutModule,
    CommonModule,
    ConfirmSignUpFormModule
];

const COMMON_DECLARATIONS = [ConfirmSignUpPage];

@NgModule({
    imports: [COMMON_IMPORTS],
    declarations: [COMMON_DECLARATIONS],
    exports: [COMMON_DECLARATIONS]
})
export class ConfirmSignUpModule {}
