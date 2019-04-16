import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { RestLayout } from './rest.layout';

const COMMON_IMPORTS = [FlexLayoutModule, MatToolbarModule, MatTabsModule];

const COMMON_DECLARATIONS = [RestLayout];

@NgModule({
    imports: [COMMON_IMPORTS, RouterModule],
    declarations: [COMMON_DECLARATIONS],
    exports: [COMMON_DECLARATIONS]
})
export class RestLayoutModule {}
