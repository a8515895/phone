import { Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class VerifyService {
    constructor(private _http: HttpService) {  
    }
    login(data)  {
        let body = data;
        return this._http.post('login',body)
    }
    logout() {
        return this._http.post('logout')
    }
}