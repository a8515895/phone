import { Component,Input,OnInit,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular/index';
import { AdminService } from '../../app/service/admin.service';
import { Socket } from 'ng-socket-io';
// import { LoginPage } from '../../pages/login/login';
import { ChatPage } from '../../pages/chat/chat'; 
import { PopoverPage } from '../popover/popover'; 
import BASE_URL from '../../app/BASE_URL';
import { ShareService } from '../../app/service/share.service';
import { PopoverController } from 'ionic-angular';
import $ from 'jquery';
@Component({
    selector: 'page-homeMessageClone', 
    templateUrl: 'homeMessageClone.html'
})
export class HomeMessageClone implements OnInit{
    BASE_URL = BASE_URL;
    @Input("admin") admin : any;
    // @ViewChild('nav') navCtrl: NavController
    user : any;
    constructor(private navCtrl: NavController,public popoverCtrl: PopoverController,private sv : ShareService,public ad : AdminService,private socket: Socket) {
        this.user = JSON.parse(localStorage.getItem("user"));
    }
    ngOnInit(){
        console.log(this.admin);
    }
    presentPopover(myEvent,data){
        let popover = this.popoverCtrl.create(PopoverPage,{room : data.room,target : data.target});
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(data => {
            console.log("Đã tắt POP");
        })
    }
    chooseAdmin(admin){
        if(admin != this.user.id){
            let room = this.sv.changeRoom(admin+'_'+this.user.id);
            $("#room_"+room+" .last_message").removeClass("b");
            this.socket.emit("joinRoom",{room : room,target : admin});
            return this.navCtrl.push(ChatPage,{room : room});
        }    
    }

}