import { Component} from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular/index';
import {AdminService} from "../../app/service/admin.service";
import { DomService } from'../../app/service/dom.service'  ;
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage{ 
  room : any;
  target : any;
  constructor(public navParams:NavParams,public ad : AdminService,public viewCtrl: ViewController) {
    this.room = this.navParams.get('room');
    this.target = this.navParams.get('target');
  }
  deleteMessage(){
    this.viewCtrl.dismiss()
    console.log("Đã Xóa");
  }
  getInfo(){

  }
}