import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class LayoutStore {
    private readonly _isDrawerOpen = new BehaviorSubject<boolean>(false);

    readonly isDrawerOpen$ = this._isDrawerOpen.asObservable();

    private getValue() {
        return this._isDrawerOpen.getValue();
    }

    toggle() {
        this._isDrawerOpen.next(!this.getValue());
    }

    open() {
        this._isDrawerOpen.next(true);
    }

    close() {
        this._isDrawerOpen.next(false);
    }
}
