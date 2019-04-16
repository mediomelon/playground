import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SignUpFormModule } from '../../components/sign-up-form/sign-up-form.module';
import { SignUpPage } from './sign-up.page';

const COMMON_IMPORTS = [FlexLayoutModule, SignUpFormModule, CommonModule];

const COMMON_DECLARATIONS = [SignUpPage];

@NgModule({
    imports: [COMMON_IMPORTS],
    declarations: [COMMON_DECLARATIONS],
    exports: [COMMON_DECLARATIONS]
})
export class SignUpModule {}
