import { Injectable } from '@angular/core';
@Injectable()
export class ShareService {   
    arrUser = {}; 
    constructor() {    
    }
    addNewUser(data){
        this.arrUser = data;      
    }
    removeUser(data){
        if(this.arrUser[data.id] != null || this.arrUser[data.id] != ""){
            delete this.arrUser[data.id];
        }   
    }
    newUserLogin(){
        return this.arrUser;
    }
    changeRoom(room){
        let id1 = room.split("_")[0];
        let id2 = room.split("_")[1];
        if(id1 < id2){
            room = id1+"_"+id2;
        }else if(id2 < id1){
            room = id2+"_"+id1;
        }
        return room;
    }
    empty(data){
        if(data == null || data == '') return true;
        else return false;
    }
}