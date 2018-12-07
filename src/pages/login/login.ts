import { Component,ViewChild } from '@angular/core';
import { NavController,ToastController,LoadingController,App,ViewController } from 'ionic-angular/index';
import { VerifyService } from '../../app/service/verify.service';
import { Register } from '../register/register'
import { TabsPage } from '../tab/tab';
import { Socket } from 'ng-socket-io';
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    model : any = {
        username : '',
        password : '',
    }
    disable : boolean = false;
    toastFail : any;
    loader : any;
    constructor(public loadingCtrl: LoadingController,public socket : Socket,public navCtrl: NavController,private toastCtrl: ToastController,private _sv : VerifyService) {
        if(localStorage.getItem("isLogin") != "" &&  localStorage.getItem("isLogin") != null){
            this.navCtrl.setRoot(TabsPage);
        }
    }
    onSubmit(){ 
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        this.toastFail = this.toastCtrl.create({
            message: 'Đăng nhập thất bại',
            duration: 3000,
            position: 'bottom'
        });       
        this.disable = true;
        this.loader.present();
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.model.username.match(re)){
            this.model['type'] = 'email';
            this.model['email'] = this.model['username'];
        }
        else this.model['type'] = 'username';
        this._sv.login(this.model).then(
            res => {  
                this.disable = false;                
                if(res.status){
                    this.socket.emit("login",res.user.original)
                    localStorage.setItem('user',JSON.stringify(res.user.original));  
                    localStorage.setItem("isLogin",res.access_token); 
                    localStorage.setItem('level',res.level);  
                    this.navCtrl.setRoot(TabsPage);
                    return;
                }
                this.loader.dismissAll();
                this.toastFail.present();
            },
            err => {
                console.log(err);
            }
        )
    }
    pushPage(){
        // alert('test');
        return this.navCtrl.push(Register);
    }
}
