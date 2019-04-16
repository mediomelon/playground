import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { CognitoConfig } from '../../models/config';
import { AuthenticationService } from '../../services/authentication.service';

const CONFIG_KEY = "CONFIG";

@Injectable({
    providedIn: "root"
})
export class ConfigStore {
    private readonly _config = new ReplaySubject<CognitoConfig>(1);

    readonly config$ = this._config.asObservable();

    constructor(private authenticationService: AuthenticationService) {
        const value = this.getFromStorage();
        this.setValue(value);
    }

    private setValue(value: CognitoConfig) {
        if (value) this.authenticationService.setConfig(value);
        this._config.next(value);
    }

    setValueAndPutInStorage(value: CognitoConfig): void {
        this.setValue(value);
        this.putInStorage(value);
    }

    private putInStorage(value: CognitoConfig): void {
        localStorage.setItem(CONFIG_KEY, JSON.stringify(value));
    }

    private getFromStorage(): CognitoConfig {
        return JSON.parse(localStorage.getItem(CONFIG_KEY));
    }
}
