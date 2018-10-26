import { Component,OnInit,Renderer2,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController,private render : Renderer2,private sv : ShareService,public ad : AdminService,private cs :CookieService,private socket: Socket) {
    this.user = this.cs.getObject("user")['original'];
    this.NODE_userlogout();
    this.NODE_socketOnMessage();
    this.NODE_hasSeen();
  } 
  ngOnInit(){
    this.audio = new Audio("../../assets/mess2.mp3");
    this.socket.emit("newUserLogin");
    this.getAdminCloneMessage();    
    this.NODE_listRoom();
  }
  getAdminCloneMessage(){
    this.ad.getAdminCloneMessage({id : this.user.id}).then(
      res => {
        if(!this.sv.empty(res.error)){
          this.cs.removeAll();
          return this.navCtrl.setRoot(LoginPage);
        }else{
          res.forEach((e,k) => {
            this.listAdmin.push(e);
            this.listAdmin[k]['target'] = e.admin_receive_id == this.user.id ? e.admin_send_id : e.admin_receive_id;
            this.listAdmin[k]['name'] = e.admin_receive_id == this.user.id ? e.admin_send_name : e.admin_receive_name;
            this.listAdmin[k]['avartar'] = e.admin_receive_id == this.user.id ? e.admin_send_avartar : e.admin_receive_avartar;
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
      let interval = setInterval(()=>{  
        if(this.listAdmin.length == $(`.chat-home`).length){
          Object.keys(data).forEach((e)=>{
            $(`.chat-home[target=${data[e].id}] .iconAcitveFB`).addClass("active");
          })
          clearInterval(interval)
        }
      },1000)
    });
  }
  NODE_userlogout(){
    this.socket.on("adminLogout",(data)=>{
      $(`#room_${data.id} .iconAcitveFB`).removeClass("active");
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
      if($("#room_"+data.room.name).length == 0){
        let id = data.room.id1 == this.user.id ? data.room.id2 : data.room.id1;
        if(id != this.user.id){
          this.ad.getDetailAdmin({id : id}).then(
            res =>{
              data.data.user.name = res.name;
              data.data.user.avartar = res.avartar;
              this.createNewMessage(data);
            }
          )
        }else{
          this.createNewMessage(data);
        }
      }else{
        let it = $("#room_"+data.room.name+" .last_message");
        if(!it.hasClass("b")) it.addClass("b");
        it.html(data.data);
      }
    });
  }
  NODE_listRoom(){
    this.socket.on("listRoom",(data)=>{
      let interval = setInterval(()=>{
        if(this.listAdmin.length == $(`.chat-home`).length){
          let arrRoom = data;
          this.listAdmin.forEach((e)=>{
            let room = this.sv.changeRoom(this.user.id+"_"+e.id);
            if(!this.sv.empty(arrRoom[room])){
              let seen = arrRoom[room].seen;
              if(seen.agent != this.user.id){
                $("#room_"+room+" .messageNotSeen").css("display","block");
                $("#room_"+room+" .messageNotSeen").html(seen.num);
              }
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
      if(data.seen.agent != this.user.id){
        $("#room_"+data.name+" .messageNotSeen").css("display","none");
        $("#room_"+data.name+" .messageNotSeen").html(data.seen.num);
      }
    });
  }
  createNewMessage(data){
    let item = document.createElement("ion-item");
    item.className="admin chat-home";
    item.setAttribute("target",data.data.room.id1 == this.user.id ? data.data.room.id2 : data.data.room.id1);
    item.innerHTML =
      `
        <ion-avatar item-start="" style="position : relative">
            <img src="${BASE_URL+'public/img/avartar/'}${this.sv.empty(data.data.user.avartar) ? 'no-avartar.png' : data.data.user.avartar}">
            <span class="pull-right messageNotSeen" style="display : none">0</span>
            <span class="pull-right iconAcitveFB"></span>
        </ion-avatar>
        <div class="item-inner">
          <div class="input-wrapper">
            <ion-label class="label label-md">
              <h2>${data.data.user.name}</h2>
              <p class="last_message b">${data.data.data}</p>
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
