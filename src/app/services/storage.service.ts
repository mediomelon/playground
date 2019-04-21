import { Injectable } from '@angular/core';
import * as localForage from 'localforage';
import { from, Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class StorageService {
    get(key: string): Observable<any> {
        return from(localForage.getItem(key));
    }

    set(key: string, value: any) {
        return from(localForage.setItem(key, value));
    }
}
