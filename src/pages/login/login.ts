import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { VerifyService } from '../../app/service/verify.service';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { ShareService } from '../../app/service/share.service'

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
    toastSuccess : any;
    toastFail : any;
    loader : any;
    constructor(public loadingCtrl: LoadingController,private sv: ShareService,public socket : Socket,public navCtrl: NavController,private toastCtrl: ToastController,private _sv : VerifyService,private cookieService: CookieService,) {
        if(this.cookieService.get("isLogin") != "" &&  this.cookieService.get("isLogin") != null){
            this.navCtrl.setRoot(HomePage);
        }
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        this.toastSuccess = this.toastCtrl.create({
            message: 'Đăng nhập thành công',
            duration: 3000,
            position: 'bottom'
        });
        this.toastFail = this.toastCtrl.create({
            message: 'Đăng nhập thất bại',
            duration: 3000,
            position: 'bottom'
        });
    }
    onSubmit(){        
        this.disable = true;
        this.loader.present();
        this._sv.login(this.model).then(
            res => {  
                this.disable = false;
                if(res.status){
                    this.sv.addNewUser(res.user.original);
                    this.cookieService.putObject('user',res.user);
                    this.cookieService.put('isLogin',res.access_token);   
                    this.cookieService.put('level',res.level);   
                    this.toastSuccess.present();
                    this.navCtrl.setRoot(HomePage);
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
