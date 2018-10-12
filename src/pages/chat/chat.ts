import { Component,ElementRef,Renderer2,ViewChild,OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AdminService } from '../../app/service/admin.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Socket } from 'ng-socket-io';
import { ShareService } from '../../app/service/share.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import BASE_URL from '../../app/BASE_URL';

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
    constructor(private camera: Camera,public navParam : NavParams,public sv : ShareService,public render : Renderer2,public navCtrl: NavController,public ad : AdminService,private cs :CookieService,private socket: Socket) {
        this.user = this.cs.getObject("user")['original'];
        this.room = this.navParam.get("room");
        this.NODE_socketOnMessage();
        this.socket.on("getHistory",(data)=>{
            this.message = data;
        })
    }
    ngOnInit(){
        this.socket.emit("getHistory",{room : this.room});
    }
    sendMessage(mess){
        this.socket.emit("sendMessage",{room : this.room,user : this.user,data : mess.value});
        mess.value="";
    }
    createNewMessage(data){
        let item = document.createElement("div");
        if(data.user.id == this.user.id)item.className="message reply";
        else item.className="message receive";
        let avartar;
        if(data.user.avartar != null && data.user.avartar != '') avartar = data.user.avartar;
        else avartar = 'no-avartar.png';
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
        this.render.appendChild(this.ul.nativeElement,item);  
        this.render.listen(item,"click",()=>{
            // this.socket.emit("is_seen",{status : true,room : e.name,email : this.cookie.getObject('user')['original']['email']});
        });
    }
    NODE_socketOnMessage(){
        this.socket.on("sendMessage",(data)=>{
            if(data.room.name == this.sv.changeRoom(this.room)){
                this.createNewMessage(data.data);
            }
        });
    }
    hasSeen(){
        this.socket.emit("hasSeen",{room : this.room,user : this.user.id});
    }
    openGallery(){
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        }        
        this.camera.getPicture(options).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
        }); 
    }
}
