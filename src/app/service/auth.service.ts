import { Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class AuthService {    
    constructor(private _http: HttpService) {    
    }
    logout(){
        
    }
}