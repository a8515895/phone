import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular/index';
import { AdminService } from '../../app/service/admin.service';
import { Socket } from 'ng-socket-io';
import { ChatPage } from '../chat/chat'; 
import BASE_URL from '../../app/BASE_URL';
import $ from 'jquery';
@Component({
    selector: 'page-phonebook',
    templateUrl: 'phonebook.html'
})
export class Phonebook implements OnInit {  
    user : any;
    BASE_URL =BASE_URL;
    listAdmin : any;
    audio : any;
    constructor(public navCtrl: NavController,public ad : AdminService,private socket: Socket) {
        this.user = JSON.parse(localStorage.getItem("user"));
        this.socket.emit("listAdmin");
        this.getListAdminChat();     
        this.NODE_userlogout();
        this.NODE_socketOnMessage();
        this.NODE_hasSeen();
    } 
    ngOnInit(){
        // this.audio = new Audio("../../assets/mess2.mp3");
        this.NODE_newUserLogin();
    }
    getListAdminChat(){
        this.ad.getAdmin({"condition" : `admin.id != `+this.user.id}).then(
            res => {
                this.listAdmin = res.splice(0);
            }
        )
    }
    NODE_newUserLogin(){  
        this.socket.on("newUserLogin",(data)=>{ 
            $(`#admin_phonebook_${data.id} .iconAcitveFB`).addClass("active");
        });
    }
    NODE_userlogout(){
        this.socket.on("adminLogout",(data)=>{
            $(`#admin_phonebook_${data.id} .iconAcitveFB`).removeClass("active");
        });
    }
    chooseAdmin(admin){
        if(admin.id != this.user.id){
        this.socket.emit("joinRoom",{room : `${admin.id}_${this.user.id}`,target : admin.id});
        return this.navCtrl.push(ChatPage,{room : `${admin.id}_${this.user.id}`});
        }    
    }
    NODE_socketOnMessage(){
        this.socket.on("sendMessage",(data)=>{
            // if(data.data.user.id != this.user.id) this.audio.play();        
            let seen = data.room.seen;
            $("#admin_phonebook_"+seen.agent+" .messageNotSeen").css("display","block");
            $("#admin_phonebook_"+seen.agent+" .messageNotSeen").html(seen.num);
        });
    }
    NODE_hasSeen(){
        this.socket.on("hasSeen",(data)=>{
        let id;
        if(data.id1 != this.user.id) id = data.id1;
        else id = data.id2;
        $("#admin_phonebook_"+id+" .messageNotSeen").css("display","none");
        $("#admin_phonebook_"+id+" .messageNotSeen").html(data.seen.num);
        });
    }
}