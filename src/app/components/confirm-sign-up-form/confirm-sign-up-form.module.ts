import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ConfirmSignUpFormComponent } from './confirm-sign-up-form.component';

const COMMON_IMPORTS = [
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
];

const COMMON_DECLARATIONS = [ConfirmSignUpFormComponent];

@NgModule({
    imports: [COMMON_IMPORTS],
    declarations: [COMMON_DECLARATIONS],
    exports: [COMMON_DECLARATIONS]
})
export class ConfirmSignUpFormModule {}
