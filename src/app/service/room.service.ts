import { Injectable } from '@angular/core';
import { HttpService } from '../service/http.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class RoomService {    
    constructor(private _http: HttpService) {    
    }
    getDetailRoom(condition?){
        return this._http.get('getDetailRoom',condition);
    }
    addMessage(data){
        return this._http.post('addMessage',data);
    }
    getMessageInRoom(condition?){
        return this._http.get('getMessageInRoom',condition);
    }
}