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
    selector: 'page-phonebook',
    templateUrl: 'phonebook.html'
})
export class Phonebook implements OnInit {  
    user : any;
    BASE_URL =BASE_URL;
    listAdmin : any;
    audio : any;
    constructor(public navCtrl: NavController,private sv : ShareService,public ad : AdminService,private cs :CookieService,private socket: Socket) {
        this.user = this.cs.getObject("user")['original'];
        this.socket.emit("listAdmin");
        this.getListAdminChat();     
        this.NODE_userlogout();
        this.NODE_socketOnMessage();
        this.NODE_hasSeen();
        this.socket.emit("login",this.user);
    } 
    ngOnInit(){
        this.audio = new Audio("../../assets/mess2.mp3");
        this.NODE_newUserLogin();
        this.NODE_listRoom();
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
            let interval = setInterval(()=>{
                if(this.listAdmin.length == $(`.phonebook`).length){
                Object.keys(data).forEach((e)=>{
                    let id = data[e].id;
                    $(`#admin_phonebook_${id} .iconAcitveFB`).addClass("active");
                })
                clearInterval(interval)
                }
            },1000)
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
            if(data.data.user.id != this.user.id) this.audio.play();        
            let seen = data.room.seen;
            $("#admin_phonebook_"+seen.agent+" .messageNotSeen").css("display","block");
            $("#admin_phonebook_"+seen.agent+" .messageNotSeen").html(seen.num);
        });
    }
    NODE_listRoom(){
        this.socket.on("listRoom",(data)=>{
        let interval = setInterval(()=>{
            if(this.listAdmin.length == $(`.phonebook`).length){
            let arrRoom = data;
            this.listAdmin.forEach((e)=>{
                let room = this.sv.changeRoom(this.user.id+"_"+e.id);
                if(!this.sv.empty(arrRoom[room])){
                let seen = arrRoom[room].seen;
                $("#admin_phonebook_"+seen.agent+" .messageNotSeen").css("display","block");
                $("#admin_phonebook_"+seen.agent+" .messageNotSeen").html(seen.num);
                }        
            })
            clearInterval(interval)
            }
        },1000);
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