import { Component,OnInit,Renderer2,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular/index';
import { AdminService } from '../../app/service/admin.service';
import { Socket } from 'ng-socket-io';
import { LoginPage } from '../../pages/login/login';
import { HomeMessageClone } from '../../custom-page/home-message-clone/homeMessageClone'; 
import BASE_URL from '../../app/BASE_URL';
import { ShareService } from '../../app/service/share.service';
import { PopoverController } from 'ionic-angular';
import { DomService } from'../../app/service/dom.service'  

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
  @ViewChild('nav') navCtrl: NavController
  constructor(private domService: DomService,public popoverCtrl: PopoverController,private render : Renderer2,private sv : ShareService,public ad : AdminService,private socket: Socket) {
    this.user = JSON.parse(localStorage.getItem("user"));
    if(this.sv.empty(this.user)){
      this.navCtrl.setRoot(LoginPage);
      console.log("Đã lại đây");
    }else{
      this.socket.on("login",()=>{
        this.socket.emit("login",this.user);
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
          localStorage.clear();
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
  NODE_socketOnMessage(){
    this.socket.on("sendMessage",(data)=>{
      let id = data.room.id1 == this.user.id ? data.room.id2 : data.room.id1;
      console.log($("#target_"+id));
      console.log($("#target_"+id).length);
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
    data.data.user['last_message'] = data.data.data;
    this.domService.appendComponentToBody(HomeMessageClone,this.ul.nativeElement,data.data.user);
  }
}
