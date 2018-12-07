import { Component,ViewChild } from '@angular/core';
import { NavController,ToastController,LoadingController,Nav } from 'ionic-angular/index';
import { VerifyService } from '../../app/service/verify.service';
import { AdminService } from '../../app/service/admin.service';
import { TabsPage } from '../tab/tab';
import { Socket } from 'ng-socket-io';
@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class Register {
    @ViewChild(Nav) nav:Nav; 
    model : any = {
        username : '',
        password : '',
        repassword : '',
        name : '',
        email : '',
    }
    disable : boolean = false;
    toastFail : any;
    loader : any;
    constructor(public loadingCtrl: LoadingController,public ad : AdminService,public socket : Socket,public navCtrl: NavController,private toastCtrl: ToastController,private _sv : VerifyService) {
        if(localStorage.getItem("isLogin") != "" &&  localStorage.getItem("isLogin") != null){
            this.navCtrl.setRoot(TabsPage);
        }
    }
    onSubmit(){ 
        if(this.model.username == '' || this.model.password == '' || this.model.name == '' || this.model.email == ''){
            this.toastFail = this.toastCtrl.create({
                message: 'Mời ghi đầy đủ thông tin',
                duration: 3000,
                position: 'bottom'
            }); 
            return;
        }else{
            if(this.model.password == this.model.repassword){
                this.ad.registerAdmin(this.model).then(res=>{
                    if(res.err == 0){
                        this.toastFail = this.toastCtrl.create({
                            message: "Thêm thành công",
                            duration: 3000,
                            position: 'bottom'
                        });
                    }else{
                        this.toastFail = this.toastCtrl.create({
                            message: res.err,
                            duration: 3000,
                            position: 'bottom'
                        }); 
                    }
                })
            }else{
                this.toastFail = this.toastCtrl.create({
                    message: 'Mật khẩu không khớp',
                    duration: 3000,
                    position: 'bottom'
                }); 
            }
        }

    }
    popPage(){
        this.navCtrl.pop();
    }
}
