import { Component } from '@angular/core';
import { NavController,ToastController,LoadingController } from 'ionic-angular/index';
import { VerifyService } from '../../app/service/verify.service';
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
        this._sv.login(this.model).then(
            res => {  
                this.disable = false;                
                if(res.status){
                    this.socket.emit("login",res.user.original)
                    localStorage.setItem('user',res.user.original);  
                    console.log("Test app",localStorage.getItem("user"));                  
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
}
