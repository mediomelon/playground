import { NgModule } from '@angular/core';

import { SignInPage } from './sign-in.page';

const COMMON_IMPORTS = [];

const COMMON_DECLARATIONS = [SignInPage];

@NgModule({
    imports: [COMMON_IMPORTS],
    declarations: [COMMON_DECLARATIONS],
    exports: [COMMON_DECLARATIONS]
})
export class SignInModule {}
