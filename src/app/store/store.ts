import { action, observable } from 'mobx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import remotedev from 'mobx-remotedev/lib/dev';


@Injectable()
@remotedev({name: 'STORE'})
export class Store {

    @observable
    public id: number = 1;
    
    constructor(
        private _http: Http
    ) {
        console.log(this._http);
        // remotedev(this, {glboal: true})
    }
}
