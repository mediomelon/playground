import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { CognitoConfigFormModule } from '../../components/cognito-config-form/cognito-config-form.module';
import { CognitoLayout } from './cognito.layout';

const COMMON_IMPORTS = [
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    CognitoConfigFormModule,
    CommonModule
];

const COMMON_DECLARATIONS = [CognitoLayout];

@NgModule({
    imports: [COMMON_IMPORTS, RouterModule],
    declarations: [COMMON_DECLARATIONS],
    exports: [COMMON_DECLARATIONS]
})
export class CognitoLayoutModule {}
