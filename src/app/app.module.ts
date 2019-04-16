import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmplifyService } from 'aws-amplify-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AppProvidersModule } from './providers/app-providers.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        AppRoutingModule,
        AppProvidersModule
    ],
    providers: [AmplifyService],
    bootstrap: [AppComponent]
})
export class AppModule {}
