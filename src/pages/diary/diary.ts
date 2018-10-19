import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdminService } from '../../app/service/admin.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Socket } from 'ng-socket-io';
import { ChatPage } from '../chat/chat'; 
import BASE_URL from '../../app/BASE_URL';
import { ShareService } from '../../app/service/share.service'
import $ from 'jquery';
@Component({
    selector: 'page-diary',
    templateUrl: 'diary.html'
})
export class Diary implements OnInit {  
    user : any;
    BASE_URL = BASE_URL;
    constructor(public navCtrl: NavController,private sv : ShareService,public ad : AdminService,private cs :CookieService,private socket: Socket) {
        this.user = this.cs.getObject("user")['original'];
        this.socket.emit("listAdmin");
    }
    ngOnInit(){
        
    }
}