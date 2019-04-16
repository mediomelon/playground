import { NgModule } from '@angular/core';
import { LabelOptions, MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';

const matLabelDefaultOptions: LabelOptions = {
    float: "always"
};

const matFormFieldDefaultOptions: MatFormFieldDefaultOptions = {
    appearance: "outline"
};

const matSnackbarDefaultOptions: MatSnackBarConfig = {
    horizontalPosition: "right",
    verticalPosition: "bottom",
    duration: 2000
};

@NgModule({
    providers: [
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: matSnackbarDefaultOptions
        },
        { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: matLabelDefaultOptions },
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: matFormFieldDefaultOptions
        }
    ]
})
export class AppProvidersModule {}
