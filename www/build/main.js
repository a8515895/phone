webpackJsonp([0],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_verify_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_tab__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtrl, socket, navCtrl, toastCtrl, _sv) {
        this.loadingCtrl = loadingCtrl;
        this.socket = socket;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this._sv = _sv;
        this.model = {
            username: '',
            password: '',
        };
        this.disable = false;
        if (localStorage.getItem("isLogin") != "" && localStorage.getItem("isLogin") != null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tab_tab__["a" /* TabsPage */]);
        }
    }
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
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
        if (this.model.username.match(re)) {
            this.model['type'] = 'email';
            this.model['email'] = this.model['username'];
        }
        else
            this.model['type'] = 'username';
        this._sv.login(this.model).then(function (res) {
            _this.disable = false;
            if (res.status) {
                _this.socket.emit("login", res.user.original);
                localStorage.setItem('user', JSON.stringify(res.user.original));
                localStorage.setItem("isLogin", res.access_token);
                localStorage.setItem('level', res.level);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tab_tab__["a" /* TabsPage */]);
                return;
            }
            _this.loader.dismissAll();
            _this.toastFail.present();
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.pushPage = function () {
        // alert('test');
        return this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* Register */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\login\login.html"*/'<div style="padding-top : 50px;background: #ccc;height: 100%;width : 100%">\n\n    <div style="background: #fff;border : 1px solid #ccc;border-radius : 4px;height : 450px;width : 250px;margin : auto">\n\n        <div style="border-bottom : 1px solid #ccc">\n\n            <span style="font-weight: bold;color: #fff;display: block;padding: 10px;text-align : center;background: #df5151">Đăng nhập</span>\n\n        </div>\n\n        <div style="margin-top : 10px">\n\n            <form (ngSubmit)="onSubmit($event)" #form="ngForm">\n\n                <ion-list>\n\n                    <ion-item>\n\n                        <ion-label floating>Username / Email</ion-label>\n\n                        <ion-input type="text" name="username" [(ngModel)]="model.username" #username="ngModel"></ion-input>\n\n                    </ion-item>          \n\n                    <ion-item>\n\n                        <ion-label floating>Password</ion-label>\n\n                        <ion-input type="password" name="password" [(ngModel)]="model.password" #password="ngModel"></ion-input>\n\n                    </ion-item>          \n\n                </ion-list>\n\n                <div padding>\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col col-6>\n\n                                <button style="width : 100%;padding: 3px 6px;border-radius: 4px;background: #df5151;color: #fff;" type="submit" block>Đăng Nhập</button>\n\n                            </ion-col>\n\n                            <ion-col col-6>\n\n                                <button type="button" style="width : 100%;padding: 3px 6px;border-radius: 4px;background: #8c16a3;color: #fff;" block (click)="pushPage()">Tôi chưa có tài khoản</button>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n                </div>\n\n            </form>\n\n        </div>\n\n    </div>\n\n</div>\n\n'/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__app_service_verify_service__["a" /* VerifyService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyService = /** @class */ (function () {
    function VerifyService(_http) {
        this._http = _http;
    }
    VerifyService.prototype.login = function (data) {
        var body = data;
        return this._http.post('login', body);
    };
    VerifyService.prototype.logout = function () {
        return this._http.post('logout');
    };
    VerifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_http_service__["a" /* HttpService */]])
    ], VerifyService);
    return VerifyService;
}());

//# sourceMappingURL=verify.service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_share_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_room_service__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_BASE_URL__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChatPage = /** @class */ (function () {
    function ChatPage(rs, camera, navParam, sv, render, ad, socket) {
        this.rs = rs;
        this.camera = camera;
        this.navParam = navParam;
        this.sv = sv;
        this.render = render;
        this.ad = ad;
        this.socket = socket;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_7__app_BASE_URL__["a" /* default */];
        this.message = [];
        this.lastScrollTop = 0;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.room = this.sv.changeRoom(this.navParam.get("room"));
        this.NODE_socketOnMessage();
    }
    ChatPage.prototype.ngOnInit = function () {
        this.getHistory();
    };
    ChatPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(500);
        }, 1000);
        this.content.ionScrollEnd.subscribe(function (res) {
            if (!_this.sv.empty(res)) {
                if (res.scrollTop == 0) {
                }
            }
        });
    };
    ChatPage.prototype.getHistory = function () {
        var _this = this;
        this.rs.getMessageInRoom({ room: this.room, limit: [0, 10] }).then(function (res) {
            _this.message = res;
        });
    };
    ChatPage.prototype.sendMessage = function (mess) {
        var admin_receive = this.room.split("_")[0] == this.user.id ? this.room.split("_")[1] : this.room.split("_")[0];
        if (!this.sv.empty(this.base64Image)) {
            this.addAdminCloneMessage({ last_message: "Bạn đã nhận hình ảnh", type: "img", room: this.room, id: this.user.id, admin_send: this.user.id, admin_receive: admin_receive });
            this.socket.emit("sendMessage", { type: 'img', room: this.room, user: this.user, data: this.base64Image, admin_send: this.user.id, admin_receive: admin_receive });
            this.base64Image = "";
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()(".prepareSendImage").removeClass("active");
            this.rs.addMessage({ type: "img", room: this.room, admin_send: this.user.id, admin_receive: admin_receive, message: this.base64Image });
        }
        if (!this.sv.empty(mess.value)) {
            this.addAdminCloneMessage({ last_message: mess.value, type: "text", room: this.room, id: this.user.id, admin_send: this.user.id, admin_receive: admin_receive });
            this.socket.emit("sendMessage", { room: this.room, user: this.user, data: mess.value, admin_send: this.user.id, admin_receive: admin_receive });
            this.rs.addMessage({ type: "text", room: this.room, admin_send: this.user.id, admin_receive: admin_receive, message: mess.value });
            mess.value = "";
        }
    };
    ChatPage.prototype.createNewMessage = function (data) {
        var item = document.createElement("div");
        if (data.user.id == this.user.id)
            item.className = "message reply";
        else
            item.className = "message receive";
        var avartar;
        if (data.user.avartar != null && data.user.avartar != '')
            avartar = data.user.avartar;
        else
            avartar = 'no-avartar.png';
        if (this.sv.empty(data.type) || data.type == 'text') {
            item.innerHTML =
                "\n                <div class=\"avarta\">\n                    <img style=\"border-radius : 100%\" src=\"" + __WEBPACK_IMPORTED_MODULE_7__app_BASE_URL__["a" /* default */] + "public/img/avartar/" + avartar + "\">\n                </div>\n                <div class=\"content\">\n                    <span style=\"word-wrap: normal\">\n                        " + data.data + "\n                    </span>\n                </div>\n                <div style=\"clear : both\"></div>\n            ";
        }
        else if (data.type == 'img') {
            item.innerHTML =
                "\n                <div class=\"avarta\">\n                    <img style=\"border-radius : 100%\" src=\"" + __WEBPACK_IMPORTED_MODULE_7__app_BASE_URL__["a" /* default */] + "public/img/avartar/" + avartar + "\">\n                </div>\n                <div class=\"content\">\n                    <div style=\"max-width : 100px;max-height : 100px;overflow : hidden\">\n                        <img src=\"" + data.data + "\" width='100%'>\n                    </div>\n                </div>\n                <div style=\"clear : both\"></div>\n            ";
        }
        this.render.appendChild(this.ul.nativeElement.lastElementChild, item);
        this.content.scrollToBottom(500);
    };
    ChatPage.prototype.addAdminCloneMessage = function (data) {
        this.ad.addAdminCloneMessage(data);
    };
    ChatPage.prototype.NODE_socketOnMessage = function () {
        var _this = this;
        this.socket.on("sendMessage", function (data) {
            if (data.room.name == _this.sv.changeRoom(_this.room)) {
                _this.createNewMessage(data.data);
            }
        });
    };
    ChatPage.prototype.hasSeen = function () {
        this.socket.emit("hasSeen", { room: this.room, user: this.user.id });
    };
    ChatPage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()(".prepareSendImage").addClass("active");
        }, function (err) {
        });
    };
    ChatPage.prototype.deleteImage = function () {
        this.base64Image = "";
        __WEBPACK_IMPORTED_MODULE_8_jquery___default()(".prepareSendImage").removeClass("active");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('list'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChatPage.prototype, "ul", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["a" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\chat\chat.html"*/'<ion-header>\n\n    <ion-navbar class="main-background">\n\n        <ion-title class="ion-title-color">\n\n            <button style="display : inline-block" ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n\n            Ionic Chat\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content style="height : 100%;width : 100%;background: #d4d4d478">\n\n    <ion-content id="list-content-chat" style="height : calc(100% - 25px);width : 100%" #content >\n\n        <div #list>\n\n            <div class="message-present">\n\n                <div class="message {{i.id == user.id ? \'reply\' : \'receive\'}}" *ngFor="let i of message">\n\n                    <div class="avarta">\n\n                        <img style="border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{i.avartar == null ? \'no-avartar.png\' : i.avartar}}">\n\n                    </div>\n\n                    <div class="content">\n\n                        <span *ngIf="i.type == null || i.type == \'text\'" style="word-wrap: normal">\n\n                            {{i.message}}\n\n                        </span>\n\n                        <div *ngIf="i.type == \'img\'" style="max-width : 100px;max-height : 100px;overflow : hidden">\n\n                            <img [src]="i.message" width=\'100%\' />\n\n                        </div>\n\n                    </div>\n\n                    <div style="clear : both"></div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </ion-content>\n\n    <div style="height : 25px;width : 100%;position: relative;">\n\n        <div class="prepareSendImage">\n\n            <div style="height: 60px;width: 60px;padding: 10px;position : relative">\n\n                <img [src]="base64Image" style="border-radius: 10px" width="100%">\n\n                <div style="position : absolute;top : 0;right : 0;cursor: pointer;" (click)="deleteImage()"><ion-icon name="close-circle"></ion-icon></div>\n\n            </div>\n\n        </div>\n\n        <div style="height : 25px">\n\n            <div style="width : 80%;float: left;height : 100%">\n\n                <input #input style="width : 100%;height : 100%;border: 0;padding: 10px" (click)="hasSeen()" />\n\n            </div>\n\n            <div style="width : 10%;float: left;height : 100%">\n\n                <button style="width : 100%;height : 100%;line-height: 1.5" (click)="openGallery()">\n\n                    <ion-icon name="albums"></ion-icon>\n\n                </button>\n\n            </div>\n\n            <div style="width : 10%;float: left;height : 100%">\n\n                <button style="width : 100%;height : 100%;line-height: 1.5" (click)="sendMessage(input)"><ion-icon style="color : rgba(53, 120, 229, 1)" name="paper-plane"></ion-icon></button>\n\n            </div>\n\n            <div style="clear : both"></div>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\chat\chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__app_service_room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = /** @class */ (function () {
    function AdminService(_http) {
        this._http = _http;
    }
    AdminService.prototype.getAdmin = function (condition) {
        return this._http.get('getListAdmin', condition);
    };
    AdminService.prototype.getAdminCloneMessage = function (condition) {
        return this._http.get('getListAdminCloneMessage', condition);
    };
    AdminService.prototype.addAdminCloneMessage = function (data) {
        return this._http.post('addAdminCloneMessage', data);
    };
    AdminService.prototype.getDetailAdmin = function (data) {
        return this._http.get('getDetailAdmin', data);
    };
    AdminService.prototype.getProvince = function () {
        return this._http.get('getListProvince');
    };
    AdminService.prototype.getDistrict = function (data) {
        return this._http.get('getListDistrict', data);
    };
    AdminService.prototype.addAdmin = function (data) {
        return this._http.post('addAdmin', data);
    };
    AdminService.prototype.registerAdmin = function (data) {
        return this._http.post('registerAdmin', data);
    };
    AdminService.prototype.deleteAdmin = function (data) {
        return this._http.delete('deleteAdmin', data);
    };
    AdminService.prototype.deleteAdminCloneMessage = function (data) {
        return this._http.delete('deleteAdminCloneMessage', data);
    };
    AdminService.prototype.updateAdmin = function (data) {
        return this._http.put('updateAdmin', data);
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_http_service__["a" /* HttpService */]])
    ], AdminService);
    return AdminService;
}());

//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_verify_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_admin_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_tab__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Register = /** @class */ (function () {
    function Register(loadingCtrl, ad, socket, navCtrl, toastCtrl, _sv) {
        this.loadingCtrl = loadingCtrl;
        this.ad = ad;
        this.socket = socket;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this._sv = _sv;
        this.model = {
            username: '',
            password: '',
            repassword: '',
            name: '',
            email: '',
        };
        this.disable = false;
        if (localStorage.getItem("isLogin") != "" && localStorage.getItem("isLogin") != null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tab_tab__["a" /* TabsPage */]);
        }
    }
    Register.prototype.onSubmit = function () {
        var _this = this;
        if (this.model.username == '' || this.model.password == '' || this.model.name == '' || this.model.email == '') {
            this.toastFail = this.toastCtrl.create({
                message: 'Mời ghi đầy đủ thông tin',
                duration: 3000,
                position: 'bottom'
            });
            return;
        }
        else {
            if (this.model.password == this.model.repassword) {
                this.ad.registerAdmin(this.model).then(function (res) {
                    if (res.err == 0) {
                        _this.toastFail = _this.toastCtrl.create({
                            message: "Thêm thành công",
                            duration: 3000,
                            position: 'bottom'
                        });
                    }
                    else {
                        _this.toastFail = _this.toastCtrl.create({
                            message: res.err,
                            duration: 3000,
                            position: 'bottom'
                        });
                    }
                });
            }
            else {
                this.toastFail = this.toastCtrl.create({
                    message: 'Mật khẩu không khớp',
                    duration: 3000,
                    position: 'bottom'
                });
            }
        }
    };
    Register.prototype.popPage = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["f" /* Nav */])
    ], Register.prototype, "nav", void 0);
    Register = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\register\register.html"*/'<div style="padding-top : 50px;background: #ccc;height: 100%;width : 100%">\n\n    <div style="background: #fff;border : 1px solid #ccc;border-radius : 4px;min-height : 450px;width : 250px;margin : auto">\n\n        <div style="border-bottom : 1px solid #ccc">\n\n            <span style="font-weight: bold;color: #fff;display: block;padding: 10px;text-align : center;background: #8c16a3">Đăng ký</span>\n\n        </div>\n\n        <div style="margin-top : 10px">\n\n            <form (ngSubmit)="onSubmit($event)" #form="ngForm">\n\n                    <ion-list>\n\n                        <ion-item>\n\n                            <ion-label floating>Tên đăng nhập</ion-label>\n\n                            <ion-input type="text" name="username" [(ngModel)]="model.username" #username="ngModel" required></ion-input>\n\n                        </ion-item> \n\n                        <ion-item>\n\n                            <ion-label floating>Email</ion-label>\n\n                            <ion-input type="email" name="email" [(ngModel)]="model.email" #email="ngModel" required></ion-input>\n\n                        </ion-item> \n\n                        <ion-item>\n\n                            <ion-label floating>Họ và Tên</ion-label>\n\n                            <ion-input type="text" name="name" [(ngModel)]="model.name" #name="ngModel" required></ion-input>\n\n                        </ion-item>          \n\n                        <ion-item>\n\n                            <ion-label floating>Password</ion-label>\n\n                            <ion-input type="password" name="password" [(ngModel)]="model.password" #password="ngModel" required></ion-input>\n\n                        </ion-item>        \n\n                        <ion-item>\n\n                            <ion-label floating>Re-Password</ion-label>\n\n                            <ion-input type="password" name="repassword" [(ngModel)]="model.repassword" #repassword="ngModel" required></ion-input>\n\n                        </ion-item>    \n\n                    </ion-list>\n\n                    <div padding>\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <button type="button" style="width : 100%;padding: 3px 6px;border-radius: 4px;background: #df5151;color: #fff;" (click)="popPage()" block>Tôi đã có tài khoản</button>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <button style="width : 100%;padding: 3px 6px;border-radius: 4px;background: #8c16a3;color: #fff;"  type="submit" block >Đăng Ký</button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </div>\n\n            </form>\n\n        </div>\n\n    </div>\n\n</div>'/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__app_service_verify_service__["a" /* VerifyService */]])
    ], Register);
    return Register;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_page_home_message_clone_homeMessageClone__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_BASE_URL__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service_share_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service_dom_service__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    // @ViewChild('nav') navCtrl: NavController
    function HomePage(domService, navCtrl, popoverCtrl, sv, ad, socket) {
        var _this = this;
        this.domService = domService;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.sv = sv;
        this.ad = ad;
        this.socket = socket;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_6__app_BASE_URL__["a" /* default */];
        this.listAdmin = [];
        this.isShowNoMessage = false;
        this.user = JSON.parse(localStorage.getItem("user"));
        if (this.sv.empty(this.user)) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        }
        else {
            this.socket.on("login", function () {
                _this.socket.emit("login", _this.user);
            });
        }
        this.NODE_userlogout();
        this.NODE_socketOnMessage();
        this.NODE_hasSeen();
        this.NODE_removeRoom();
    }
    HomePage.prototype.ngOnInit = function () {
        // this.audio = new Audio("../../assets/mess2.mp3");
        this.getAdminCloneMessage();
    };
    HomePage.prototype.getAdminCloneMessage = function () {
        var _this = this;
        this.ad.getAdminCloneMessage({ id: this.user.id }).then(function (res) {
            if (!_this.sv.empty(res.error)) {
                localStorage.clear();
                return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                if (res.length == 0)
                    _this.isShowNoMessage = true;
                res.forEach(function (e, k) {
                    _this.listAdmin.push(e);
                    _this.listAdmin[k]['target'] = e.admin_receive_id == _this.user.id ? e.admin_send_id : e.admin_receive_id;
                    _this.listAdmin[k]['name'] = e.admin_receive_id == _this.user.id ? e.admin_send_name : e.admin_receive_name;
                    _this.listAdmin[k]['avartar'] = e.admin_receive_id == _this.user.id ? e.admin_send_avartar : e.admin_receive_avartar;
                    _this.listAdmin[k]['is_login'] = e.admin_receive_id == _this.user.id ? e.admin_send_is_login : e.admin_receive_is_login;
                });
                _this.NODE_newUserLogin();
            }
        }, function (err) {
        });
    };
    HomePage.prototype.NODE_newUserLogin = function () {
        this.socket.on("newUserLogin", function (data) {
            __WEBPACK_IMPORTED_MODULE_10_jquery___default()("#target_" + data.id + " .iconAcitveFB").addClass("active");
        });
    };
    HomePage.prototype.NODE_userlogout = function () {
        this.socket.on("adminLogout", function (data) {
            __WEBPACK_IMPORTED_MODULE_10_jquery___default()("#target_" + data.id + " .iconAcitveFB").removeClass("active");
        });
    };
    HomePage.prototype.NODE_socketOnMessage = function () {
        var _this = this;
        this.socket.on("sendMessage", function (data) {
            var id = data.room.id1 == _this.user.id ? data.room.id2 : data.room.id1;
            if (__WEBPACK_IMPORTED_MODULE_10_jquery___default()("#target_" + id).length == 0) {
                _this.ad.getDetailAdmin({ id: id }).then(function (res) {
                    data.data.user.name = res.name;
                    data.data.user.avartar = res.avartar;
                    _this.createNewMessage(data);
                });
            }
            else {
                var it = __WEBPACK_IMPORTED_MODULE_10_jquery___default()("#target_" + id + " .last_message");
                console.log(data);
                if (_this.user.id != data.data.user.id) {
                    if (!it.hasClass("b"))
                        it.addClass("b");
                    it.html(data.data.type != 'img' ? _this.sv.charLimit(data.data.data) : 'Bạn nhận được hình ảnh');
                }
                else {
                    it.removeClass("b");
                }
            }
        });
    };
    HomePage.prototype.NODE_hasSeen = function () {
        var _this = this;
        this.socket.on("hasSeen", function (data) {
            if (data.seen.agent != _this.user.id) {
                __WEBPACK_IMPORTED_MODULE_10_jquery___default()("#room_" + data.name + " .messageNotSeen").css("display", "none");
                __WEBPACK_IMPORTED_MODULE_10_jquery___default()("#room_" + data.name + " .messageNotSeen").html(data.seen.num);
            }
        });
    };
    HomePage.prototype.NODE_removeRoom = function () {
        var _this = this;
        this.socket.on("removeRoom", function (data) {
            __WEBPACK_IMPORTED_MODULE_10_jquery___default()("#" + data.jid).parents("page-homeMessageClone").remove();
            if (__WEBPACK_IMPORTED_MODULE_10_jquery___default()("page-homeMessageClone").length == 0) {
                _this.isShowNoMessage = true;
            }
        });
    };
    HomePage.prototype.createNewMessage = function (data) {
        this.isShowNoMessage = false;
        data.data.user['last_message'] = data.data.data;
        this.domService.appendComponentToBody(__WEBPACK_IMPORTED_MODULE_5__custom_page_home_message_clone_homeMessageClone__["a" /* HomeMessageClone */], this.ul.nativeElement, data.data.user);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('list'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "ul", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar class="main-background">\n\n    <ion-title class="ion-title-color">\n\n      <button style="display : inline-block" ion-button menuToggle>\n\n        <div class="avarta">\n\n          <img style="height : 30px;width : 30px;border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{user.avartar == null ? \'no-avartar.png\' : user.avartar}}">\n\n        </div>\n\n      </button>\n\n      Ionic Home\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content  style="height : 100%;width : 100%">  \n\n  <ion-grid>\n\n    <ion-list #list>\n\n      <page-homeMessageClone [admin]="admin" *ngFor="let admin of listAdmin"></page-homeMessageClone>\n\n      <h3 class="admin" *ngIf="isShowNoMessage" style="color: #ccc;text-align: center">KHÔNG CÓ TIN NHẮN NÀO</h3>\n\n    </ion-list>\n\n  </ion-grid>\n\n</ion-content>\n\n  '/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__app_service_dom_service__["a" /* DomService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_7__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMessageClone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_popover__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_BASE_URL__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service_share_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { LoginPage } from '../../pages/login/login';






var HomeMessageClone = /** @class */ (function () {
    function HomeMessageClone(navCtrl, popoverCtrl, sv, ad, socket) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.sv = sv;
        this.ad = ad;
        this.socket = socket;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_6__app_BASE_URL__["a" /* default */];
        this.user = JSON.parse(localStorage.getItem("user"));
    }
    HomeMessageClone.prototype.ngOnInit = function () {
    };
    HomeMessageClone.prototype.presentPopover = function (myEvent, data) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__popover_popover__["a" /* PopoverPage */], { room: data.room, target: data.target, jid: data.jid });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!_this.sv.empty(data)) {
                if (data.type == "delete") {
                    data['id'] = _this.user.id;
                    _this.socket.emit("removeRoom", data);
                }
            }
        });
    };
    HomeMessageClone.prototype.chooseAdmin = function (admin) {
        if (admin != this.user.id) {
            var room = this.sv.changeRoom(admin + '_' + this.user.id);
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()("#room_" + room + " .last_message").removeClass("b");
            this.socket.emit("joinRoom", { room: room, target: admin });
            return this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_chat_chat__["a" /* ChatPage */], { room: room });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("admin"),
        __metadata("design:type", Object)
    ], HomeMessageClone.prototype, "admin", void 0);
    HomeMessageClone = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-homeMessageClone',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\custom-page\home-message-clone\homeMessageClone.html"*/'<ion-row>\n\n    <ion-col col-10 (click)="chooseAdmin(admin.target)">\n\n        <ion-item class="admin chat-home" id="target_{{admin.target}}" >\n\n        <ion-avatar item-start style="position : relative">\n\n            <img src="{{BASE_URL+\'public/img/avartar/\'}}{{admin.avartar == null ? \'no-avartar.png\' : admin.avartar}}">\n\n            <span class="pull-right messageNotSeen" [ngClass]="{\'active\': admin.seen != 0 && user.id == admin.admin_receive_id ? true : false}">{{admin.seen}}</span>\n\n            <span class="pull-right iconAcitveFB" [ngClass]="{\'active\': admin.is_login == 1 ? true : false}"></span>\n\n        </ion-avatar>\n\n        <h2>{{admin.name}}</h2>\n\n        <p class="last_message">{{admin.last_message}}</p>\n\n        </ion-item>\n\n    </ion-col>\n\n    <ion-col col-2 style="text-align: center;line-height: 5" (click)="presentPopover($event,{room : admin.room,target : admin.target,jid : \'target_\'+admin.target})">          \n\n        <ion-icon name="more"></ion-icon>\n\n    </ion-col>\n\n</ion-row>'/*ion-inline-end:"C:\xampp\htdocs\phone\src\custom-page\home-message-clone\homeMessageClone.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_7__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], HomeMessageClone);
    return HomeMessageClone;
}());

//# sourceMappingURL=homeMessageClone.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomService = /** @class */ (function () {
    function RoomService(_http) {
        this._http = _http;
    }
    RoomService.prototype.getDetailRoom = function (condition) {
        return this._http.get('getDetailRoom', condition);
    };
    RoomService.prototype.addMessage = function (data) {
        return this._http.post('addMessage', data);
    };
    RoomService.prototype.getMessageInRoom = function (condition) {
        return this._http.get('getMessageInRoom', condition);
    };
    RoomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_http_service__["a" /* HttpService */]])
    ], RoomService);
    return RoomService;
}());

//# sourceMappingURL=room.service.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverPage = /** @class */ (function () {
    function PopoverPage(navParams, ad, viewCtrl) {
        this.navParams = navParams;
        this.ad = ad;
        this.viewCtrl = viewCtrl;
        this.room = this.navParams.get('room');
        this.target = this.navParams.get('target');
        this.jid = this.navParams.get('jid');
    }
    PopoverPage.prototype.deleteMessage = function () {
        this.viewCtrl.dismiss({ type: "delete", jid: this.jid, room: this.room });
    };
    PopoverPage.prototype.getInfo = function () {
        this.viewCtrl.dismiss({ type: "delete", jid: this.jid, room: this.room });
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popover',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\custom-page\popover\popover.html"*/'<ion-list style="padding : 0">\n\n    <ion-item class="main-color" (click)="getInfo()">\n\n        <ion-icon name="people"></ion-icon> Thông tin người dùng\n\n    </ion-item>\n\n    <ion-item class="main-color" (click)="deleteMessage()">\n\n        <ion-icon name="trash"></ion-icon> Xóa tin nhắn\n\n    </ion-item>\n\n</ion-list>'/*ion-inline-end:"C:\xampp\htdocs\phone\src\custom-page\popover\popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["l" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DomService = /** @class */ (function () {
    function DomService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DomService.prototype.appendComponentToBody = function (component, nativeElement, type) {
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        componentRef.instance['admin'] = type;
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView
            .rootNodes[0];
        nativeElement.appendChild(domElem);
    };
    DomService.prototype.deleteComponent = function (component) {
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    };
    DomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], DomService);
    return DomService;
}());

//# sourceMappingURL=dom.service.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phonebook; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_BASE_URL__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Phonebook = /** @class */ (function () {
    function Phonebook(navCtrl, ad, socket) {
        this.navCtrl = navCtrl;
        this.ad = ad;
        this.socket = socket;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_5__app_BASE_URL__["a" /* default */];
        this.user = JSON.parse(localStorage.getItem("user"));
        this.socket.emit("listAdmin");
        this.getListAdminChat();
        this.NODE_userlogout();
        this.NODE_socketOnMessage();
        this.NODE_hasSeen();
    }
    Phonebook.prototype.ngOnInit = function () {
        // this.audio = new Audio("../../assets/mess2.mp3");
        this.NODE_newUserLogin();
    };
    Phonebook.prototype.getListAdminChat = function () {
        var _this = this;
        this.ad.getAdmin({ "condition": "admin.id != " + this.user.id }).then(function (res) {
            _this.listAdmin = res.splice(0);
        });
    };
    Phonebook.prototype.NODE_newUserLogin = function () {
        this.socket.on("newUserLogin", function (data) {
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#admin_phonebook_" + data.id + " .iconAcitveFB").addClass("active");
        });
    };
    Phonebook.prototype.NODE_userlogout = function () {
        this.socket.on("adminLogout", function (data) {
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#admin_phonebook_" + data.id + " .iconAcitveFB").removeClass("active");
        });
    };
    Phonebook.prototype.chooseAdmin = function (admin) {
        if (admin.id != this.user.id) {
            this.socket.emit("joinRoom", { room: admin.id + "_" + this.user.id, target: admin.id });
            return this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */], { room: admin.id + "_" + this.user.id });
        }
    };
    Phonebook.prototype.NODE_socketOnMessage = function () {
        this.socket.on("sendMessage", function (data) {
            // if(data.data.user.id != this.user.id) this.audio.play();        
            var seen = data.room.seen;
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#admin_phonebook_" + seen.agent + " .messageNotSeen").css("display", "block");
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#admin_phonebook_" + seen.agent + " .messageNotSeen").html(seen.num);
        });
    };
    Phonebook.prototype.NODE_hasSeen = function () {
        var _this = this;
        this.socket.on("hasSeen", function (data) {
            var id;
            if (data.id1 != _this.user.id)
                id = data.id1;
            else
                id = data.id2;
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#admin_phonebook_" + id + " .messageNotSeen").css("display", "none");
            __WEBPACK_IMPORTED_MODULE_6_jquery___default()("#admin_phonebook_" + id + " .messageNotSeen").html(data.seen.num);
        });
    };
    Phonebook = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-phonebook',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\phonebook\phonebook.html"*/'<ion-header>\n\n    <ion-navbar class="main-background">\n\n        <ion-title class="ion-title-color">\n\n        <button style="display : inline-block" ion-button menuToggle>\n\n            <div class="avarta">\n\n            <img style="height : 30px;width : 30px;border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{user.avartar == null ? \'no-avartar.png\' : user.avartar}}">\n\n            </div>\n\n        </button>\n\n        Ionic Phone Book\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content  style="height : 100%;width : 100%">\n\n    <ion-list>\n\n        <ion-item class="admin phonebook" id="admin_phonebook_{{admin.id}}" *ngFor="let admin of listAdmin" (click)="chooseAdmin(admin)">\n\n            <ion-avatar item-start style="position : relative">\n\n                <img src="{{BASE_URL+\'public/img/avartar/\'}}{{admin.avartar == null ? \'no-avartar.png\' : admin.avartar}}">\n\n                <span style="display : none" class="pull-right messageNotSeen">0 </span>\n\n                <span class="pull-right iconAcitveFB" [ngClass]="{\'active\': admin.is_login == 1 ? true : false}"></span>\n\n            </ion-avatar>\n\n            <h2>{{admin.name}}</h2>\n\n            <p>{{admin.email}}</p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\phonebook\phonebook.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], Phonebook);
    return Phonebook;
}());

//# sourceMappingURL=phonebook.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_BASE_URL__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Diary = /** @class */ (function () {
    function Diary(navCtrl, ad, socket) {
        this.navCtrl = navCtrl;
        this.ad = ad;
        this.socket = socket;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_4__app_BASE_URL__["a" /* default */];
        this.user = JSON.parse(localStorage.getItem("user"));
        this.socket.emit("listAdmin");
    }
    Diary.prototype.ngOnInit = function () {
    };
    Diary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-diary',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\diary\diary.html"*/'<ion-header>\n\n    <ion-navbar class="main-background">\n\n        <ion-title class="ion-title-color">\n\n        <button style="display : inline-block" ion-button menuToggle>\n\n            <div class="avarta">\n\n            <img style="height : 30px;width : 30px;border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{user.avartar == null ? \'no-avartar.png\' : user.avartar}}">\n\n            </div>\n\n        </button>\n\n        Ionic DIARY\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content  style="height : 100%;width : 100%">\n\n    ĐÂY LÀ DIARY\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\diary\diary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"]])
    ], Diary);
    return Diary;
}());

//# sourceMappingURL=diary.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, ad) {
        this.navCtrl = navCtrl;
        this.ad = ad;
        this.ad.getAdmin().then(function (res) {
        });
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\profile\profile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Ionic Profile\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n\n        '/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(391);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__custom_page_popover_popover__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__custom_page_home_message_clone_homeMessageClone__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_diary_diary__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_phonebook_phonebook__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tab_tab__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_http_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_verify_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_admin_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_dom_service__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_share_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_room_service__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// PLUGIN

var config = { url: 'http://node.sega-group.com:3000' };
// CUSTOM PAGE


// PAGE








// SERVICE






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tab_tab__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_diary_diary__["a" /* Diary */],
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* Register */],
                __WEBPACK_IMPORTED_MODULE_9__custom_page_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_10__custom_page_home_message_clone_homeMessageClone__["a" /* HomeMessageClone */],
                __WEBPACK_IMPORTED_MODULE_17__pages_phonebook_phonebook__["a" /* Phonebook */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__["SocketIoModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular_index__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular_index__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tab_tab__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* Register */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__custom_page_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_10__custom_page_home_message_clone_homeMessageClone__["a" /* HomeMessageClone */],
                __WEBPACK_IMPORTED_MODULE_15__pages_diary_diary__["a" /* Diary */],
                __WEBPACK_IMPORTED_MODULE_17__pages_phonebook_phonebook__["a" /* Phonebook */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__service_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_21__service_admin_service__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_20__service_verify_service__["a" /* VerifyService */],
                __WEBPACK_IMPORTED_MODULE_23__service_share_service__["a" /* ShareService */],
                __WEBPACK_IMPORTED_MODULE_24__service_room_service__["a" /* RoomService */],
                __WEBPACK_IMPORTED_MODULE_22__service_dom_service__["a" /* DomService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular_index__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tab_tab__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_BASE_URL__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, socket) {
        var _this = this;
        this.socket = socket;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_8__app_BASE_URL__["a" /* default */];
        this.user = {
            avartar: 'user.avartar',
        };
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.checkCookie();
        });
    }
    MyApp.prototype.checkCookie = function () {
        if (localStorage.getItem('user') == null || localStorage.getItem('user') == '') {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.user = JSON.parse(localStorage.getItem("user"));
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tab_tab__["a" /* TabsPage */];
        }
        return this.nav.setRoot(this.rootPage);
    };
    MyApp.prototype.openPage = function (page) {
        switch (page) {
            case "profile":
                return this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */]);
            case "logout":
                this.socket.emit("adminLogout", this.user);
                localStorage.clear();
                return this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mycontent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\app\app.html"*/'<ion-menu [content]="mycontent">\n\n    <ion-header class="main-background">\n\n        <ion-toolbar >\n\n            <ion-title >\n\n                <div style="width : 100%" class="avarta">\n\n                    <img style="height : 30px;width : 30px;border-radius : 100%" [src]="user.avartar == null ? BASE_URL+\'public/img/avartar/no-avartar.png\' : BASE_URL+\'public/img/avartar/\'+user.avartar ">\n\n                    <span style="display : inline-block;float : right;">{{user.name == null ? \'Không xác định\' : user.name}}</span>\n\n                </div>\n\n            </ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <button ion-item menuClose (click)="openPage(\'profile\')">Profile</button>\n\n        </ion-list>\n\n        <ion-list>\n\n            <button ion-item menuClose (click)="openPage(\'chat\')">Chat</button>\n\n        </ion-list>\n\n        <ion-list>\n\n            <button ion-item menuClose (click)="openPage(\'logout\')">Logout</button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\phone\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__["Socket"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var BASE_URL = "http://laravel.sega-group.com/";
/* harmony default export */ __webpack_exports__["a"] = (BASE_URL);
//# sourceMappingURL=BASE_URL.js.map

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BASE_URL__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// declare var $ :JQuery;

var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__BASE_URL__["a" /* default */] + 'api/';
    }
    HttpService.prototype.get = function (url, body) {
        if (body === void 0) { body = null; }
        url = this.baseUrl + url;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('isLogin'),
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        if (body != null) {
            url += "?";
            __WEBPACK_IMPORTED_MODULE_8_jquery___default.a.each(body, function (key, e) {
                url += key + "=" + e + "&";
            });
        }
        return this.http.get(url, this.options)
            .map(this.extractData)
            .toPromise()
            .catch(this.handleError);
    };
    HttpService.prototype.post = function (url, body) {
        url = this.baseUrl + url;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('isLogin'),
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        return this.http.post(url, body, this.options)
            .map(this.extractData)
            .toPromise()
            .catch(this.handleError);
    };
    HttpService.prototype.delete = function (url, body) {
        if (body === void 0) { body = null; }
        url = this.baseUrl + url;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('isLogin'),
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        if (body != null) {
            url += "?";
            __WEBPACK_IMPORTED_MODULE_8_jquery___default.a.each(body, function (key, e) {
                url += key + "=" + e + "&";
            });
        }
        return this.http.delete(url, this.options)
            .map(this.extractData)
            .toPromise()
            .catch(this.handleError);
    };
    HttpService.prototype.put = function (url, body) {
        url = this.baseUrl + url;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('isLogin'),
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        return this.http.put(url, body, this.options)
            .map(this.extractData)
            .toPromise()
            .catch(this.handleError);
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    HttpService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.status || "Server error");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mycontent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular_index__["g" /* NavController */])
    ], HttpService.prototype, "nav", void 0);
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phonebook_phonebook__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diary_diary__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__phonebook_phonebook__["a" /* Phonebook */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__diary_diary__["a" /* Diary */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\tab\tab.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Danh bạ" tabIcon="book"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Nhật ký" tabIcon="copy"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\tab\tab.html"*/
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareService = /** @class */ (function () {
    function ShareService() {
        this.arrUser = {};
    }
    ShareService.prototype.addNewUser = function (data) {
        this.arrUser = data;
    };
    ShareService.prototype.removeUser = function (data) {
        if (this.arrUser[data.id] != null || this.arrUser[data.id] != "") {
            delete this.arrUser[data.id];
        }
    };
    ShareService.prototype.newUserLogin = function () {
        return this.arrUser;
    };
    ShareService.prototype.changeRoom = function (room) {
        var id1 = room.split("_")[0];
        var id2 = room.split("_")[1];
        if (id1 < id2) {
            room = id1 + "_" + id2;
        }
        else if (id2 < id1) {
            room = id2 + "_" + id1;
        }
        return room;
    };
    ShareService.prototype.empty = function (data) {
        if (data == null || data == '')
            return true;
        else
            return false;
    };
    ShareService.prototype.charLimit = function (str, limit) {
        if (limit === void 0) { limit = 20; }
        if (str.length > limit)
            return str = str.substring(0, 10) + " ...";
        else
            return str;
    };
    ShareService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ShareService);
    return ShareService;
}());

//# sourceMappingURL=share.service.js.map

/***/ })

},[386]);
//# sourceMappingURL=main.js.map