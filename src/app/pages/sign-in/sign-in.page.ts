import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: "sign-in",
    templateUrl: "./sign-in.page.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInPage {}
