import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CognitoConfig } from '../../models/config';
import { ConfigStore } from './config.store';
import { LayoutStore } from './layout.store';

@Component({
    selector: "cognito-layout",
    templateUrl: "./cognito.layout.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CognitoLayout {
    config$ = this.configStore.config$;
    isOpen$ = this.layoutStore.isDrawerOpen$;

    constructor(
        private layoutStore: LayoutStore,
        private configStore: ConfigStore
    ) {}

    onToggle() {
        this.layoutStore.toggle();
    }

    onClose() {
        this.layoutStore.close();
    }

    onOpen() {
        this.layoutStore.open();
    }

    onSubmit(config: CognitoConfig) {
        this.configStore.setValueAndPutInStorage(config);
        this.onClose();
    }
}
