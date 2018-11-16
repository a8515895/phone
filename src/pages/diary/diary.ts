import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular/index';
import { AdminService } from '../../app/service/admin.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Socket } from 'ng-socket-io';
import BASE_URL from '../../app/BASE_URL';
@Component({
    selector: 'page-diary',
    templateUrl: 'diary.html'
})
export class Diary implements OnInit {  
    user : any;
    BASE_URL = BASE_URL;
    constructor(public navCtrl: NavController,public ad : AdminService,private cs :CookieService,private socket: Socket) {
        let cookie = this.cs.getObject("user");
        this.user = cookie['original'];
        this.socket.emit("listAdmin");
    }
    ngOnInit(){
        
    }
}