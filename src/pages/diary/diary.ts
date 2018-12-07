import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular/index';
import { AdminService } from '../../app/service/admin.service';
import { Socket } from 'ng-socket-io';
import BASE_URL from '../../app/BASE_URL';
@Component({
    selector: 'page-diary',
    templateUrl: 'diary.html'
})
export class Diary implements OnInit {  
    user : any;
    BASE_URL = BASE_URL;
    constructor(public navCtrl: NavController,public ad : AdminService,private socket: Socket) {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.socket.emit("listAdmin");
    }
    ngOnInit(){
        
    }
}