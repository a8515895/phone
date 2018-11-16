import { Component,OnInit,Renderer2,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular/index';
import { AdminService } from '../../app/service/admin.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Socket } from 'ng-socket-io';
import { LoginPage } from '../../pages/login/login';
import { ChatPage } from '../chat/chat'; 
import BASE_URL from '../../app/BASE_URL';
import { ShareService } from '../../app/service/share.service'
import $ from 'jquery';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit { 
  @ViewChild('list') ul : ElementRef; 
  user : any;
  BASE_URL = BASE_URL;
  listAdmin : Array<any> = [];
  audio : any;  
  isShowNoMessage : boolean = false;
  constructor(public navCtrl: NavController,private render : Renderer2,private sv : ShareService,public ad : AdminService,private cs :CookieService,private socket: Socket) {
    let cookie = this.cs.getObject("user");
    this.user = {name : "khoa",avartar : "khoa.png",email : "a8515895@gmail.com",id : 1};
    if(this.sv.empty(this.cs.getObject("user"))){
      this.navCtrl.setRoot(LoginPage);
    }else{
      this.socket.on("login",()=>{
        this.socket.emit("login",this.cs.getObject("user"));
      });
    }    
    
    this.NODE_userlogout();
    this.NODE_socketOnMessage();
    this.NODE_hasSeen();
  } 
  ngOnInit(){
    // this.audio = new Audio("../../assets/mess2.mp3");
    this.getAdminCloneMessage();    
  }
  getAdminCloneMessage(){
    this.ad.getAdminCloneMessage({id : this.user.id}).then(
      res => {
        if(!this.sv.empty(res.error)){
          this.cs.removeAll();
          return this.navCtrl.setRoot(LoginPage);
        }else{
          if(res.length == 0) this.isShowNoMessage = true;
          res.forEach((e,k) => {
            this.listAdmin.push(e);
            this.listAdmin[k]['target'] = e.admin_receive_id == this.user.id ? e.admin_send_id : e.admin_receive_id;
            this.listAdmin[k]['name'] = e.admin_receive_id == this.user.id ? e.admin_send_name : e.admin_receive_name;
            this.listAdmin[k]['avartar'] = e.admin_receive_id == this.user.id ? e.admin_send_avartar : e.admin_receive_avartar;
            this.listAdmin[k]['is_login'] = e.admin_receive_id == this.user.id ? e.admin_send_is_login : e.admin_receive_is_login;
          });
          this.NODE_newUserLogin();
        }
      },
      err =>{
      }
    )
  }
  NODE_newUserLogin(){
    this.socket.on("newUserLogin",(data)=>{ 
      $("#target_"+data.id+" .iconAcitveFB").addClass("active");
    });
  }
  NODE_userlogout(){
    this.socket.on("adminLogout",(data)=>{
      $("#target_"+data.id+" .iconAcitveFB").removeClass("active");
    });
  }
  chooseAdmin(admin){
    if(admin.id != this.user.id){
      $("#room_"+admin.room+" .last_message").removeClass("b");
      this.socket.emit("joinRoom",{room : admin.room,target : admin.id});
      return this.navCtrl.push(ChatPage,{room : admin.room});
    }    
  }
  NODE_socketOnMessage(){
    this.socket.on("sendMessage",(data)=>{
      let id = data.room.id1 == this.user.id ? data.room.id2 : data.room.id1;
      if($("#target_"+id).length == 0){
        this.ad.getDetailAdmin({id : id}).then(
          res =>{
            data.data.user.name = res.name;
            data.data.user.avartar = res.avartar;
            this.createNewMessage(data);
          }
        )
      }else{
        let it = $("#target_"+id+" .last_message");
        if(this.user.id != data.data.user.id){
          if(!it.hasClass("b")) it.addClass("b");
          it.html(data.data.type != 'img' ? this.sv.charLimit(data.data.data) : 'Bạn nhận được hình ảnh');
        }else{
          it.removeClass("b");
        }
      }
    });
  }
  NODE_hasSeen(){
    this.socket.on("hasSeen",(data)=>{
      if(data.seen.agent != this.user.id){
        $("#room_"+data.name+" .messageNotSeen").css("display","none");
        $("#room_"+data.name+" .messageNotSeen").html(data.seen.num);
      }
    });
  }
  createNewMessage(data){
    this.isShowNoMessage = false;
    let item = document.createElement("ion-item");
    item.className="admin chat-home item item-block item-md";
    item.id = data.room.id1 == this.user.id ? "target_"+data.room.id2 : "target_"+data.room.id1;
    item.innerHTML =
      `
        <ion-avatar item-start="" style="position : relative">
            <img src="${BASE_URL+'public/img/avartar/'}${this.sv.empty(data.data.user.avartar) ? 'no-avartar.png' : data.data.user.avartar}">
            <span class="pull-right messageNotSeen" style="display : none">0</span>
            <span class="pull-right iconAcitveFB active"></span>
        </ion-avatar>
        <div class="item-inner">
          <div class="input-wrapper">
            <ion-label class="label label-md">
              <h2>${data.data.user.name}</h2>
              <p class="last_message b">${data.data.type != 'img' ? this.sv.charLimit(data.data.data) : 'Bạn nhận được hình ảnh'}</p>
            </ion-label>
          </div>
        </div>
        <div class="button-effect"></div>
      `; 
    this.render.appendChild(this.ul.nativeElement,item);  
    this.render.listen(item,"click",()=>{
      this.chooseAdmin(data.user);
    });
  }
}
