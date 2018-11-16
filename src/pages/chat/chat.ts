import { Component,ElementRef,Renderer2,ViewChild,OnInit } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular/index';
import { AdminService } from '../../app/service/admin.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Socket } from 'ng-socket-io';
import { ShareService } from '../../app/service/share.service';
import { RoomService } from '../../app/service/room.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import BASE_URL from '../../app/BASE_URL';

import $ from 'jquery';

@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
    providers: [Camera],
})
export class ChatPage implements OnInit{
    @ViewChild('list') ul : ElementRef;
    BASE_URL = BASE_URL;
    user : any;
    input : ElementRef;
    room : any;
    message : any = [];
    base64Image : any;
    constructor(private rs : RoomService,private camera: Camera,public navParam : NavParams,public sv : ShareService,public render : Renderer2,public navCtrl: NavController,public ad : AdminService,private cs :CookieService,private socket: Socket) {
        let cookie = this.cs.getObject("user");
        this.user = cookie['original'];
        this.room = this.sv.changeRoom(this.navParam.get("room"));
        this.NODE_socketOnMessage();        
    }
    ngOnInit(){
        this.getHistory();
    }
    ngAfterViewInit(){
        $('#list-content-chat').animate({
            scrollTop: $('#list-content-chat').get(0).scrollHeight
        }, 1000);
    }
    getHistory(){
        this.rs.getMessageInRoom({room : this.room}).then(
            res => {
                this.message = res;
            }
        )
    }
    sendMessage(mess){
        let admin_receive = this.room.split("_")[0] == this.user.id ? this.room.split("_")[1] : this.room.split("_")[0];
        if(!this.sv.empty(this.base64Image)){
            this.addAdminCloneMessage({last_message : "Bạn đã nhận hình ảnh",type : "img",room : this.room,id : this.user.id,admin_send : this.user.id,admin_receive : admin_receive})
            this.socket.emit("sendMessage",{type : 'img',room : this.room,user : this.user,data : this.base64Image,admin_send : this.user.id,admin_receive : admin_receive});
            this.base64Image = "";
            $(".prepareSendImage").removeClass("active");
            this.rs.addMessage({type : "img",room : this.room,admin_send : this.user.id,admin_receive : admin_receive,message : this.base64Image});
        }
        if(!this.sv.empty(mess.value)){
            this.addAdminCloneMessage({last_message : mess.value,type : "text",room : this.room,id : this.user.id,admin_send : this.user.id,admin_receive : admin_receive})
            this.socket.emit("sendMessage",{room : this.room,user : this.user,data : mess.value,admin_send : this.user.id,admin_receive : admin_receive});
            this.rs.addMessage({type : "text",room : this.room,admin_send : this.user.id,admin_receive : admin_receive,message : mess.value});
            mess.value="";
        }
    }
    createNewMessage(data){
        let item = document.createElement("div");
        if(data.user.id == this.user.id)item.className="message reply";
        else item.className="message receive";
        let avartar;
        if(data.user.avartar != null && data.user.avartar != '') avartar = data.user.avartar;
        else avartar = 'no-avartar.png';
        if(this.sv.empty(data.type) || data.type == 'text'){
            item.innerHTML =
            `
                <div class="avarta">
                    <img style="border-radius : 100%" src="${BASE_URL}public/img/avartar/${avartar}">
                </div>
                <div class="content">
                    <span style="word-wrap: normal">
                        ${data.data}
                    </span>
                </div>
                <div style="clear : both"></div>
            `; 
        }else if(data.type == 'img'){
            item.innerHTML =
            `
                <div class="avarta">
                    <img style="border-radius : 100%" src="${BASE_URL}public/img/avartar/${avartar}">
                </div>
                <div class="content">
                    <div style="max-width : 100px;max-height : 100px;overflow : hidden">
                        <img src="${data.data}" width='100%'>
                    </div>
                </div>
                <div style="clear : both"></div>
            `; 
        }   
        this.render.appendChild(this.ul.nativeElement,item);  
        this.render.listen(item,"click",()=>{
            // this.socket.emit("is_seen",{status : true,room : e.name,email : this.cookie.getObject('user')['original']['email']});
        });
    }
    addAdminCloneMessage(data){
        this.ad.addAdminCloneMessage(data);
    }
    NODE_socketOnMessage(){
        this.socket.on("sendMessage",(data)=>{
            if(data.room.name == this.sv.changeRoom(this.room)){
                this.createNewMessage(data.data);
            }
            $('#list-content-chat').animate({
                scrollTop: $('#list-content-chat').get(0).scrollHeight
            }, 1000);
        });
    }
    hasSeen(){
        this.socket.emit("hasSeen",{room : this.room,user : this.user.id});
    }
    openGallery(){
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        }        
        this.camera.getPicture(options).then((imageData) => {
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            $(".prepareSendImage").addClass("active");
        }, (err) => {
        }); 
    }
    deleteImage(){
        this.base64Image = "";
        $(".prepareSendImage").removeClass("active");
    }
}
