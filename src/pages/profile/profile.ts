import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/index';
import { AdminService } from '../../app/service/admin.service';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
    constructor(public navCtrl: NavController,public ad : AdminService) {
        this.ad.getAdmin().then(
            res=>{
            },
        )
    } 
}
