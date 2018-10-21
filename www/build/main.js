webpackJsonp([0],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_verify_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_tab__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_share_service__ = __webpack_require__(47);
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
    function LoginPage(loadingCtrl, sv, socket, navCtrl, toastCtrl, _sv, cookieService) {
        this.loadingCtrl = loadingCtrl;
        this.sv = sv;
        this.socket = socket;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this._sv = _sv;
        this.cookieService = cookieService;
        this.model = {
            username: '',
            password: '',
        };
        this.disable = false;
        if (this.cookieService.get("isLogin") != "" && this.cookieService.get("isLogin") != null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tab_tab__["a" /* TabsPage */]);
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
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.disable = true;
        this.loader.present();
        this._sv.login(this.model).then(function (res) {
            _this.disable = false;
            if (res.status) {
                _this.sv.addNewUser(res.user.original);
                _this.cookieService.putObject('user', res.user);
                _this.cookieService.put('isLogin', res.access_token);
                _this.cookieService.put('level', res.level);
                _this.toastSuccess.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tab_tab__["a" /* TabsPage */]);
                return;
            }
            _this.loader.dismissAll();
            _this.toastFail.present();
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\login\login.html"*/'<div style="padding-top : 50px;background: url(assets/imgs/bg.png) no-repeat fixed;background-size: cover;height: 100%;width : 100%">\n\n    <div style="background: #fff;border : 1px solid #ccc;border-radius : 4px;height : 450px;width : 250px;margin : auto">\n\n        <form (ngSubmit)="onSubmit($event)" #form="ngForm">\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label floating>Username</ion-label>\n\n                    <ion-input type="text" name="username" [(ngModel)]="model.username" #username="ngModel"></ion-input>\n\n                </ion-item>          \n\n                <ion-item>\n\n                    <ion-label floating>Password</ion-label>\n\n                    <ion-input type="password" name="password" [(ngModel)]="model.password" #password="ngModel"></ion-input>\n\n                </ion-item>          \n\n            </ion-list>\n\n            <div padding>\n\n                <button type="submit" block>Sign In</button>\n\n            </div>\n\n        </form>\n\n    </div>\n\n</div>'/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__app_service_verify_service__["a" /* VerifyService */], __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BASE_URL__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_socket_io__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng_socket_io__);
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
    function HttpService(socket, http, cookieService) {
        this.socket = socket;
        this.http = http;
        this.cookieService = cookieService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__BASE_URL__["a" /* default */] + 'api/';
    }
    HttpService.prototype.get = function (url, body) {
        if (body === void 0) { body = null; }
        url = this.baseUrl + url;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.cookieService.get('isLogin'),
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        if (body != null) {
            url += "?";
            __WEBPACK_IMPORTED_MODULE_9_jquery___default.a.each(body, function (key, e) {
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
            'Authorization': 'bearer ' + this.cookieService.get('isLogin'),
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
            'Authorization': 'bearer ' + this.cookieService.get('isLogin'),
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        if (body != null) {
            url += "?";
            __WEBPACK_IMPORTED_MODULE_9_jquery___default.a.each(body, function (key, e) {
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
            'Authorization': 'bearer ' + this.cookieService.get('isLogin'),
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */])
    ], HttpService.prototype, "nav", void 0);
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phonebook_phonebook__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diary_diary__ = __webpack_require__(380);
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_BASE_URL__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(95);
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










var ChatPage = /** @class */ (function () {
    function ChatPage(camera, navParam, sv, render, navCtrl, ad, cs, socket, _DomSanitizationService) {
        var _this = this;
        this.camera = camera;
        this.navParam = navParam;
        this.sv = sv;
        this.render = render;
        this.navCtrl = navCtrl;
        this.ad = ad;
        this.cs = cs;
        this.socket = socket;
        this._DomSanitizationService = _DomSanitizationService;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_8__app_BASE_URL__["a" /* default */];
        this.message = [];
        this.user = this.cs.getObject("user")['original'];
        this.room = this.navParam.get("room");
        this.NODE_socketOnMessage();
        this.socket.on("getHistory", function (data) {
            _this.message = data;
        });
    }
    ChatPage.prototype.ngOnInit = function () {
        this.socket.emit("getHistory", { room: this.room });
    };
    ChatPage.prototype.sendMessage = function (mess) {
        if (!this.sv.empty(this.base64Image)) {
            this.addAdminCloneMessage("Bạn đã nhận hình ảnh", "img");
            this.socket.emit("sendMessage", { type: 'img', room: this.room, user: this.user, data: this.base64Image });
            this.base64Image = "";
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()(".prepareSendImage").removeClass("active");
        }
        if (!this.sv.empty(mess.value)) {
            this.addAdminCloneMessage(mess.value, "text");
            this.socket.emit("sendMessage", { room: this.room, user: this.user, data: mess.value });
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
                "\n                <div class=\"avarta\">\n                    <img style=\"border-radius : 100%\" src=\"" + __WEBPACK_IMPORTED_MODULE_8__app_BASE_URL__["a" /* default */] + "public/img/avartar/" + avartar + "\">\n                </div>\n                <div class=\"content\">\n                    <span style=\"word-wrap: normal\">\n                        " + data.data + "\n                    </span>\n                </div>\n                <div style=\"clear : both\"></div>\n            ";
        }
        else if (data.type == 'img') {
            item.innerHTML =
                "\n                <div class=\"avarta\">\n                    <img style=\"border-radius : 100%\" src=\"" + __WEBPACK_IMPORTED_MODULE_8__app_BASE_URL__["a" /* default */] + "public/img/avartar/" + avartar + "\">\n                </div>\n                <div class=\"content\">\n                    <div style=\"max-width : 100px;max-height : 100px;overflow : hidden\">\n                        <img src=\"" + data.data + "\" width='100%'>\n                    </div>\n                </div>\n                <div style=\"clear : both\"></div>\n            ";
        }
        this.render.appendChild(this.ul.nativeElement, item);
        this.render.listen(item, "click", function () {
            // this.socket.emit("is_seen",{status : true,room : e.name,email : this.cookie.getObject('user')['original']['email']});
        });
    };
    ChatPage.prototype.addAdminCloneMessage = function (mess, type) {
        var data = {
            "room": this.room,
            "id": this.user.id,
        };
        data['last_message'] = mess;
        data['type'] = type;
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
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()(".prepareSendImage").addClass("active");
        }, function (err) {
        });
    };
    ChatPage.prototype.deleteImage = function () {
        this.base64Image = "";
        __WEBPACK_IMPORTED_MODULE_9_jquery___default()(".prepareSendImage").removeClass("active");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('list'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChatPage.prototype, "ul", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\chat\chat.html"*/'<ion-header>\n\n    <ion-navbar class="main-background">\n\n        <ion-title class="ion-title-color">\n\n            <button style="display : inline-block" ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n\n            Ionic Chat\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content style="height : 100%;width : 100%;background: #d4d4d478">\n\n    <div style="height : calc(100% - 25px);width : 100%;overflow-y: auto;" #list>\n\n        <div class="message {{i.id == user.id ? \'reply\' : \'receive\'}}" *ngFor="let i of message">\n\n            <div class="avarta">\n\n                <img style="border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{i.avartar == null ? \'no-avartar.png\' : i.avartar}}">\n\n            </div>\n\n            <div class="content">\n\n                <span *ngIf="i.type == null" style="word-wrap: normal">\n\n                    {{i.message}}\n\n                </span>\n\n                <div *ngIf="i.type == \'img\'" style="max-width : 100px;max-height : 100px;overflow : hidden">\n\n                    <img [src]="i.message" width=\'100%\' />\n\n                </div>\n\n            </div>\n\n            <div style="clear : both"></div>\n\n        </div>\n\n    </div>\n\n    <div style="height : 25px;width : 100%;position: relative;">\n\n        <div class="prepareSendImage">\n\n            <div style="height: 60px;width: 60px;padding: 10px;position : relative">\n\n                <img [src]="base64Image" style="border-radius: 10px" width="100%">\n\n                <div style="position : absolute;top : 0;right : 0;cursor: pointer;" (click)="deleteImage()"><ion-icon name="close-circle"></ion-icon></div>\n\n            </div>\n\n        </div>\n\n        <div style="height : 25px">\n\n            <div style="width : 80%;float: left;height : 100%">\n\n                <input #input style="width : 100%;height : 100%;border: 0;padding: 10px" (click)="hasSeen()" />\n\n            </div>\n\n            <div style="width : 10%;float: left;height : 100%">\n\n                <button style="width : 100%;height : 100%;line-height: 1.5" (click)="openGallery()">\n\n                    <ion-icon name="albums"></ion-icon>\n\n                </button>\n\n            </div>\n\n            <div style="width : 10%;float: left;height : 100%">\n\n                <button style="width : 100%;height : 100%;line-height: 1.5" (click)="sendMessage(input)"><ion-icon style="color : rgba(53, 120, 229, 1)" name="paper-plane"></ion-icon></button>\n\n            </div>\n\n            <div style="clear : both"></div>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\chat\chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */]])
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

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(91);
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

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_BASE_URL__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__(95);
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










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, sv, ad, cs, socket) {
        this.navCtrl = navCtrl;
        this.sv = sv;
        this.ad = ad;
        this.cs = cs;
        this.socket = socket;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_7__app_BASE_URL__["a" /* default */];
        this.listAdmin = [];
        this.user = this.cs.getObject("user")['original'];
        this.socket.emit("listAdmin");
        this.getAdminCloneMessage();
        this.NODE_userlogout();
        this.NODE_socketOnMessage();
        this.NODE_hasSeen();
        this.socket.emit("login", this.user);
    }
    HomePage.prototype.ngOnInit = function () {
        this.audio = new Audio("../../assets/mess2.mp3");
        this.NODE_newUserLogin();
        this.NODE_listRoom();
    };
    HomePage.prototype.getAdminCloneMessage = function () {
        var _this = this;
        this.ad.getAdminCloneMessage().then(function (res) {
            if (!_this.sv.empty(res.error)) {
                _this.cs.removeAll();
                return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.listAdmin = res.splice(0);
                console.log(_this.listAdmin);
            }
        }, function (err) {
            console.log("Co Err nek", err);
        });
    };
    HomePage.prototype.NODE_newUserLogin = function () {
        var _this = this;
        this.socket.on("newUserLogin", function (data) {
            var interval = setInterval(function () {
                if (_this.listAdmin.length == __WEBPACK_IMPORTED_MODULE_9_jquery___default()(".chat-home").length) {
                    Object.keys(data).forEach(function (e) {
                        var id = data[e].id;
                        __WEBPACK_IMPORTED_MODULE_9_jquery___default()("#admin_" + id + " .iconAcitveFB").addClass("active");
                    });
                    clearInterval(interval);
                }
            }, 1000);
        });
    };
    HomePage.prototype.NODE_userlogout = function () {
        this.socket.on("adminLogout", function (data) {
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()("#admin_" + data.id + " .iconAcitveFB").removeClass("active");
        });
    };
    HomePage.prototype.chooseAdmin = function (admin) {
        if (admin.id != this.user.id) {
            this.socket.emit("joinRoom", { room: admin.id + "_" + this.user.id, target: admin.id });
            return this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */], { room: admin.id + "_" + this.user.id });
        }
    };
    HomePage.prototype.NODE_socketOnMessage = function () {
        var _this = this;
        this.socket.on("sendMessage", function (data) {
            if (data.data.user.id != _this.user.id)
                _this.audio.play();
            var seen = data.room.seen;
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()("#admin_" + seen.agent + " .messageNotSeen").css("display", "block");
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()("#admin_" + seen.agent + " .messageNotSeen").html(seen.num);
        });
    };
    HomePage.prototype.NODE_listRoom = function () {
        var _this = this;
        this.socket.on("listRoom", function (data) {
            var interval = setInterval(function () {
                if (_this.listAdmin.length == __WEBPACK_IMPORTED_MODULE_9_jquery___default()("ion-item").length) {
                    var arrRoom_1 = data;
                    _this.listAdmin.forEach(function (e) {
                        var room = _this.sv.changeRoom(_this.user.id + "_" + e.id);
                        if (!_this.sv.empty(arrRoom_1[room])) {
                            var seen = arrRoom_1[room].seen;
                            __WEBPACK_IMPORTED_MODULE_9_jquery___default()("#admin_" + seen.agent + " .messageNotSeen").css("display", "block");
                            __WEBPACK_IMPORTED_MODULE_9_jquery___default()("#admin_" + seen.agent + " .messageNotSeen").html(seen.num);
                        }
                    });
                    clearInterval(interval);
                }
            }, 1000);
        });
    };
    HomePage.prototype.NODE_hasSeen = function () {
        var _this = this;
        this.socket.on("hasSeen", function (data) {
            var id;
            if (data.id1 != _this.user.id)
                id = data.id1;
            else
                id = data.id2;
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()("#admin_" + id + " .messageNotSeen").css("display", "none");
            __WEBPACK_IMPORTED_MODULE_9_jquery___default()("#admin_" + id + " .messageNotSeen").html(data.seen.num);
        });
    };
    var _a, _b, _c, _d, _e;
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar class="main-background">\n\n    <ion-title class="ion-title-color">\n\n      <button style="display : inline-block" ion-button menuToggle>\n\n        <div class="avarta">\n\n          <img style="height : 30px;width : 30px;border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{user.avartar == null ? \'no-avartar.png\' : user.avartar}}">\n\n        </div>\n\n      </button>\n\n      Ionic Home\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content  style="height : 100%;width : 100%">  \n\n  <ion-list>\n\n    <ion-item class="admin chat-home" id="admin_{{admin.id}}" *ngFor="let admin of listAdmin" (click)="chooseAdmin(admin)">\n\n      <ion-avatar item-start style="position : relative">\n\n          <img src="{{BASE_URL+\'public/img/avartar/\'}}{{admin.avartar == null ? \'no-avartar.png\' : admin.avartar}}">\n\n          <span style="display : none" class="pull-right messageNotSeen">0</span>\n\n          <span class="pull-right iconAcitveFB"></span>\n\n      </ion-avatar>\n\n      <h2>{{admin.name}}</h2>\n\n      <p>{{admin.last_message}}</p>\n\n    </ion-item>\n\n    <h3 *ngIf="listAdmin.length == 0 " style="color: #ccc;text-align: center">KHÔNG CÓ TIN NHẮN NÀO</h3>\n\n  </ion-list>\n\n</ion-content>\n\n  '/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__app_service_share_service__["a" /* ShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_service_share_service__["a" /* ShareService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phonebook; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_BASE_URL__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(95);
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









var Phonebook = /** @class */ (function () {
    function Phonebook(navCtrl, sv, ad, cs, socket) {
        this.navCtrl = navCtrl;
        this.sv = sv;
        this.ad = ad;
        this.cs = cs;
        this.socket = socket;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_6__app_BASE_URL__["a" /* default */];
        this.user = this.cs.getObject("user")['original'];
        this.socket.emit("listAdmin");
        this.getListAdminChat();
        this.NODE_userlogout();
        this.NODE_socketOnMessage();
        this.NODE_hasSeen();
        this.socket.emit("login", this.user);
    }
    Phonebook.prototype.ngOnInit = function () {
        this.audio = new Audio("../../assets/mess2.mp3");
        this.NODE_newUserLogin();
        this.NODE_listRoom();
    };
    Phonebook.prototype.getListAdminChat = function () {
        var _this = this;
        this.ad.getAdmin({ "condition": "admin.id != " + this.user.id }).then(function (res) {
            _this.listAdmin = res.splice(0);
        });
    };
    Phonebook.prototype.NODE_newUserLogin = function () {
        var _this = this;
        this.socket.on("newUserLogin", function (data) {
            var interval = setInterval(function () {
                if (_this.listAdmin.length == __WEBPACK_IMPORTED_MODULE_8_jquery___default()(".phonebook").length) {
                    Object.keys(data).forEach(function (e) {
                        var id = data[e].id;
                        __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + id + " .iconAcitveFB").addClass("active");
                    });
                    clearInterval(interval);
                }
            }, 1000);
        });
    };
    Phonebook.prototype.NODE_userlogout = function () {
        this.socket.on("adminLogout", function (data) {
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + data.id + " .iconAcitveFB").removeClass("active");
        });
    };
    Phonebook.prototype.chooseAdmin = function (admin) {
        if (admin.id != this.user.id) {
            this.socket.emit("joinRoom", { room: admin.id + "_" + this.user.id, target: admin.id });
            return this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], { room: admin.id + "_" + this.user.id });
        }
    };
    Phonebook.prototype.NODE_socketOnMessage = function () {
        var _this = this;
        this.socket.on("sendMessage", function (data) {
            if (data.data.user.id != _this.user.id)
                _this.audio.play();
            var seen = data.room.seen;
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + seen.agent + " .messageNotSeen").css("display", "block");
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + seen.agent + " .messageNotSeen").html(seen.num);
        });
    };
    Phonebook.prototype.NODE_listRoom = function () {
        var _this = this;
        this.socket.on("listRoom", function (data) {
            var interval = setInterval(function () {
                if (_this.listAdmin.length == __WEBPACK_IMPORTED_MODULE_8_jquery___default()("ion-item").length) {
                    var arrRoom_1 = data;
                    _this.listAdmin.forEach(function (e) {
                        var room = _this.sv.changeRoom(_this.user.id + "_" + e.id);
                        if (!_this.sv.empty(arrRoom_1[room])) {
                            var seen = arrRoom_1[room].seen;
                            __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + seen.agent + " .messageNotSeen").css("display", "block");
                            __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + seen.agent + " .messageNotSeen").html(seen.num);
                        }
                    });
                    clearInterval(interval);
                }
            }, 1000);
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
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + id + " .messageNotSeen").css("display", "none");
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + id + " .messageNotSeen").html(data.seen.num);
        });
    };
    Phonebook = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-phonebook',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\phonebook\phonebook.html"*/'<ion-header>\n\n    <ion-navbar class="main-background">\n\n        <ion-title class="ion-title-color">\n\n        <button style="display : inline-block" ion-button menuToggle>\n\n            <div class="avarta">\n\n            <img style="height : 30px;width : 30px;border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{user.avartar == null ? \'no-avartar.png\' : user.avartar}}">\n\n            </div>\n\n        </button>\n\n        Ionic Phone Book\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content  style="height : 100%;width : 100%">\n\n    <ion-list>\n\n        <ion-item class="admin phonebook" id="admin_{{admin.id}}" *ngFor="let admin of listAdmin" (click)="chooseAdmin(admin)">\n\n            <ion-avatar item-start style="position : relative">\n\n                <img src="{{BASE_URL+\'public/img/avartar/\'}}{{admin.avartar == null ? \'no-avartar.png\' : admin.avartar}}">\n\n                <span style="display : none" class="pull-right messageNotSeen">0</span>\n\n                <span class="pull-right iconAcitveFB"></span>\n\n            </ion-avatar>\n\n            <h2>{{admin.name}}</h2>\n\n            <p>{{admin.email}}</p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\phonebook\phonebook.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"]])
    ], Phonebook);
    return Phonebook;
}());

//# sourceMappingURL=phonebook.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_BASE_URL__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_share_service__ = __webpack_require__(47);
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
    function Diary(navCtrl, sv, ad, cs, socket) {
        this.navCtrl = navCtrl;
        this.sv = sv;
        this.ad = ad;
        this.cs = cs;
        this.socket = socket;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_5__app_BASE_URL__["a" /* default */];
        this.user = this.cs.getObject("user")['original'];
        this.socket.emit("listAdmin");
    }
    Diary.prototype.ngOnInit = function () {
    };
    Diary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-diary',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\diary\diary.html"*/'<ion-header>\n\n    <ion-navbar class="main-background">\n\n        <ion-title class="ion-title-color">\n\n        <button style="display : inline-block" ion-button menuToggle>\n\n            <div class="avarta">\n\n            <img style="height : 30px;width : 30px;border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{user.avartar == null ? \'no-avartar.png\' : user.avartar}}">\n\n            </div>\n\n        </button>\n\n        Ionic DIARY\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content  style="height : 100%;width : 100%">\n\n    ĐÂY LÀ DIARY\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\diary\diary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"]])
    ], Diary);
    return Diary;
}());

//# sourceMappingURL=diary.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(52);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(387);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cookieServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_diary_diary__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_phonebook_phonebook__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tab_tab__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_http_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_verify_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_admin_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_cookie_services_cookies_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_share_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// PLUGIN

var config = { url: 'http://node.sega-group.com:3000' };
// PAGE







// SERVICE





function cookieServiceFactory() {
    return new __WEBPACK_IMPORTED_MODULE_19_angular2_cookie_services_cookies_service__["CookieService"]();
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tab_tab__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_diary_diary__["a" /* Diary */],
                __WEBPACK_IMPORTED_MODULE_14__pages_phonebook_phonebook__["a" /* Phonebook */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__["SocketIoModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tab_tab__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_diary_diary__["a" /* Diary */],
                __WEBPACK_IMPORTED_MODULE_14__pages_phonebook_phonebook__["a" /* Phonebook */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__service_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_19_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_18__service_admin_service__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_17__service_verify_service__["a" /* VerifyService */],
                __WEBPACK_IMPORTED_MODULE_20__service_share_service__["a" /* ShareService */],
                { provide: __WEBPACK_IMPORTED_MODULE_19_angular2_cookie_services_cookies_service__["CookieService"], useFactory: cookieServiceFactory },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tab_tab__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_BASE_URL__ = __webpack_require__(49);
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
    function MyApp(platform, sv, statusBar, splashScreen, socket, cookieService) {
        var _this = this;
        this.sv = sv;
        this.socket = socket;
        this.cookieService = cookieService;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_10__app_BASE_URL__["a" /* default */];
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
        if (this.cookieService.getObject('user') == null || this.cookieService.getObject('user') == '') {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.user = this.cookieService.getObject("user")['original'];
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tab_tab__["a" /* TabsPage */];
        }
        return this.nav.setRoot(this.rootPage);
    };
    MyApp.prototype.openPage = function (page) {
        switch (page) {
            case "profile":
                return this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */]);
            case "logout":
                this.socket.emit("adminLogout", this.cookieService.getObject("user")['original']);
                this.sv.removeUser(this.cookieService.getObject("user")['original']);
                this.cookieService.removeAll();
                return this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mycontent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\app\app.html"*/'<ion-menu [content]="mycontent">\n\n    <ion-header>\n\n        <ion-toolbar class="main-background">\n\n            <ion-title >\n\n                <div style="width : 100%" class="avarta">\n\n                    <img style="height : 30px;width : 30px;border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{user.avartar == null ? \'no-avartar.png\' : user.avartar}}">\n\n                    <span style="display : inline-block;float : right;">{{user.name == null ? \'Không xác định\' : user.name}}</span>\n\n                </div>\n\n            </ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <button ion-item menuClose (click)="openPage(\'profile\')">Profile</button>\n\n        </ion-list>\n\n        <ion-list>\n\n            <button ion-item menuClose (click)="openPage(\'chat\')">Chat</button>\n\n        </ion-list>\n\n        <ion-list>\n\n            <button ion-item menuClose (click)="openPage(\'logout\')">Logout</button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\phone\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__["CookieService"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
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
    ShareService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ShareService);
    return ShareService;
}());

//# sourceMappingURL=share.service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var BASE_URL = "http://laravel.sega-group.com/";
/* harmony default export */ __webpack_exports__["a"] = (BASE_URL);
//# sourceMappingURL=BASE_URL.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(91);
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
    AdminService.prototype.deleteAdmin = function (data) {
        return this._http.delete('deleteAdmin', data);
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

/***/ 730:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[382]);
//# sourceMappingURL=main.js.map