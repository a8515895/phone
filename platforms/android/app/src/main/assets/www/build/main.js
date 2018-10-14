webpackJsonp([0],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BASE_URL__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
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

var HttpService = (function () {
    function HttpService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__BASE_URL__["a" /* default */] + 'api/';
    }
    HttpService.prototype.get = function (url, body) {
        if (body === void 0) { body = null; }
        url = this.baseUrl + url;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.cookieService.get('isLogin'),
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        if (body != null) {
            url += "?";
            __WEBPACK_IMPORTED_MODULE_7_jquery___default.a.each(body, function (key, e) {
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
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.cookieService.get('isLogin'),
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        return this.http.post(url, body, this.options)
            .map(this.extractData)
            .toPromise()
            .catch(this.handleError);
    };
    HttpService.prototype.delete = function (url, body) {
        if (body === void 0) { body = null; }
        url = this.baseUrl + url;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.cookieService.get('isLogin'),
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        if (body != null) {
            url += "?";
            __WEBPACK_IMPORTED_MODULE_7_jquery___default.a.each(body, function (key, e) {
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
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + this.cookieService.get('isLogin'),
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
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
        if (error.status == 403 || error.status == 401) {
            alert("Đăng nhập hết hạn. Mời đăng nhập lại");
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server error");
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_BASE_URL__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(217);
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









var HomePage = (function () {
    function HomePage(navCtrl, sv, ad, cs, socket) {
        this.navCtrl = navCtrl;
        this.sv = sv;
        this.ad = ad;
        this.cs = cs;
        this.socket = socket;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_6__app_BASE_URL__["a" /* default */];
        this.listAdmin = new Array;
        this.user = this.cs.getObject("user")['original'];
        this.socket.emit("listAdmin");
        this.getListAdminChat();
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
    HomePage.prototype.ngAfterViewInit = function () {
    };
    HomePage.prototype.getListAdminChat = function () {
        var _this = this;
        this.ad.getAdmin({ "condition": "admin.id != " + this.user.id }).then(function (res) {
            _this.listAdmin = res.splice(0);
        });
    };
    HomePage.prototype.NODE_newUserLogin = function () {
        var _this = this;
        this.socket.on("newUserLogin", function (data) {
            var interval = setInterval(function () {
                if (_this.listAdmin.length == __WEBPACK_IMPORTED_MODULE_8_jquery___default()("ion-item").length) {
                    Object.keys(data).forEach(function (e) {
                        var id = data[e].id;
                        __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + id + " .iconAcitveFB").addClass("active");
                    });
                    clearInterval(interval);
                }
            }, 1000);
        });
    };
    HomePage.prototype.NODE_userlogout = function () {
        this.socket.on("adminLogout", function (data) {
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + data.id + " .iconAcitveFB").removeClass("active");
        });
    };
    HomePage.prototype.chooseAdmin = function (admin) {
        if (admin.id != this.user.id) {
            this.socket.emit("joinRoom", { room: admin.id + "_" + this.user.id, target: admin.id });
            return this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], { room: admin.id + "_" + this.user.id });
        }
    };
    HomePage.prototype.NODE_socketOnMessage = function () {
        var _this = this;
        this.socket.on("sendMessage", function (data) {
            if (data.data.user.id != _this.user.id)
                _this.audio.play();
            var seen = data.room.seen;
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + seen.agent + " .messageNotSeen").css("display", "block");
            __WEBPACK_IMPORTED_MODULE_8_jquery___default()("#admin_" + seen.agent + " .messageNotSeen").html(seen.num);
        });
    };
    HomePage.prototype.NODE_listRoom = function () {
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
    HomePage.prototype.NODE_hasSeen = function () {
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <button style="display : inline-block" ion-button menuToggle>\n\n        <div class="avarta">\n\n          <img style="height : 30px;width : 30px;border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{user.avartar == null ? \'no-avartar.png\' : user.avartar}}">\n\n        </div>\n\n      </button>\n\n      Ionic Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content  style="height : 100%;width : 100%;background: #f7f773">\n\n  <div  style="background : #d5d5d5;width: max-content;cursor : pointer;margin: auto;margin-top : 50px;padding : 10px;border-radius : 4px">\n\n    <ion-list #list>\n\n      <ion-item class="admin" id="admin_{{admin.id}}" *ngFor="let admin of listAdmin" (click)="chooseAdmin(admin)">\n\n        <ion-avatar item-start style="position : relative">\n\n          <img src="{{BASE_URL+\'public/img/avartar/\'}}{{admin.avartar == null ? \'no-avartar.png\' : admin.avartar}}">\n\n          <span style="display : none" class="pull-right messageNotSeen">0</span>\n\n          <span class="pull-right iconAcitveFB"></span>\n\n        </ion-avatar>\n\n        <h2>\n\n          {{admin.name}}\n\n        </h2>\n\n        <p>\n\n          {{admin.email}}\n\n        </p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n  '/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 172:
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
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_verify_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(46);
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









var LoginPage = (function () {
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
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
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

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(114);
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




var VerifyService = (function () {
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

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_BASE_URL__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChatPage = (function () {
    function ChatPage(camera, navParam, sv, render, navCtrl, ad, cs, socket) {
        var _this = this;
        this.camera = camera;
        this.navParam = navParam;
        this.sv = sv;
        this.render = render;
        this.navCtrl = navCtrl;
        this.ad = ad;
        this.cs = cs;
        this.socket = socket;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_7__app_BASE_URL__["a" /* default */];
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
        this.socket.emit("sendMessage", { room: this.room, user: this.user, data: mess.value });
        mess.value = "";
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
        item.innerHTML =
            "\n            <div class=\"avarta\">\n                <img style=\"border-radius : 100%\" src=\"" + __WEBPACK_IMPORTED_MODULE_7__app_BASE_URL__["a" /* default */] + "public/img/avartar/" + avartar + "\">\n            </div>\n            <div class=\"content\">\n                <span style=\"word-wrap: normal\">\n                    " + data.data + "\n                </span>\n            </div>\n            <div style=\"clear : both\"></div>\n        ";
        this.render.appendChild(this.ul.nativeElement, item);
        this.render.listen(item, "click", function () {
            // this.socket.emit("is_seen",{status : true,room : e.name,email : this.cookie.getObject('user')['original']['email']});
        });
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
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('list'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ChatPage.prototype, "ul", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\pages\chat\chat.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <button style="display : inline-block" ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n\n            Ionic Chat\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content style="height : 100%;width : 100%;background: #f7f773">\n\n    <div style="height : 95%;width : 100%;overflow-y: auto;" #list>\n\n        <div class="message {{i.id == user.id ? \'reply\' : \'receive\'}}" *ngFor="let i of message">\n\n            <div class="avarta">\n\n                <img style="border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{i.avartar == null ? \'no-avartar.png\' : i.avartar}}">\n\n            </div>\n\n            <div class="content">\n\n                <span style="word-wrap: normal">\n\n                    {{i.message}}\n\n                </span>\n\n            </div>\n\n            <div style="clear : both"></div>\n\n        </div>\n\n        <div class="message reply">\n\n            <div class="avarta">\n\n                <img style="border-radius : 100%" src="{{BASE_URL}}public/img/avartar/no-avartar.png">\n\n            </div>\n\n            <div class="content">\n\n                <span style="word-wrap: normal">\n\n                    <img [src]="base64Image" />\n\n                </span>\n\n            </div>\n\n            <div style="clear : both"></div>\n\n        </div>\n\n    </div>\n\n    <div style="height : 5%;width : 100%">\n\n        <div style="width : 80%;float: left;height : 100%">\n\n            <input #input style="width : 100%;height : 100%;border: 0;padding: 10px" (click)="hasSeen()" />\n\n        </div>\n\n        <div style="width : 10%;float: left;height : 100%">\n\n            <button style="width : 100%;height : 100%;line-height: 1.5" (click)="openGallery()">\n\n                <ion-icon name="albums"></ion-icon>\n\n            </button>\n\n        </div>\n\n        <div style="width : 10%;float: left;height : 100%">\n\n            <button style="width : 100%;height : 100%;line-height: 1.5" (click)="sendMessage(input)"><ion-icon style="color : rgba(53, 120, 229, 1)" name="paper-plane"></ion-icon></button>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\phone\src\pages\chat\chat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_admin_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(navCtrl, ad) {
        this.navCtrl = navCtrl;
        this.ad = ad;
        this.ad.getAdmin().then(function (res) {
            console.log(res);
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

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cookieServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_http_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_verify_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_admin_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_cookie_services_cookies_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_share_service__ = __webpack_require__(47);
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
    return new __WEBPACK_IMPORTED_MODULE_16_angular2_cookie_services_cookies_service__["CookieService"]();
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */]
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
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__service_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_16_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_15__service_admin_service__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_14__service_verify_service__["a" /* VerifyService */],
                __WEBPACK_IMPORTED_MODULE_17__service_share_service__["a" /* ShareService */],
                { provide: __WEBPACK_IMPORTED_MODULE_16_angular2_cookie_services_cookies_service__["CookieService"], useFactory: cookieServiceFactory },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service_share_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_BASE_URL__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, sv, statusBar, splashScreen, socket, cookieService) {
        var _this = this;
        this.sv = sv;
        this.socket = socket;
        this.cookieService = cookieService;
        // rootPage:any = LoginPage;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_10__app_BASE_URL__["a" /* default */];
        this.user = {
            avartar: 'user.avartar',
        };
        platform.ready().then(function () {
            console.log("Cookie", _this.cookieService.getObject('user'));
            _this.checkCookie();
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.checkCookie = function () {
        if (this.cookieService.getObject('user') == null || this.cookieService.getObject('user') == '') {
            return this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        }
        else {
            this.user = this.cookieService.getObject("user")['original'];
            return this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
        }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\phone\src\app\app.html"*/'<ion-menu [content]="mycontent">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>\n\n                <div style="width : 100%" class="avarta">\n\n                    <img style="height : 30px;width : 30px;border-radius : 100%" src="{{BASE_URL}}public/img/avartar/{{user.avartar == null ? \'no-avartar.png\' : user.avartar}}">\n\n                    <span style="display : inline-block;float : right;">{{user.name == null ? \'Không xác định\' : user.name}}</span>\n\n                </div>\n\n            </ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <button ion-item menuClose (click)="openPage(\'profile\')">Profile</button>\n\n        </ion-list>\n\n        <ion-list>\n\n            <button ion-item menuClose (click)="openPage(\'chat\')">Chat</button>\n\n        </ion-list>\n\n        <ion-list>\n\n            <button ion-item menuClose (click)="openPage(\'logout\')">Logout</button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\phone\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__app_service_share_service__["a" /* ShareService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_services_cookies_service__["CookieService"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareService = (function () {
    function ShareService() {
        this.arrUser = {};
    }
    ShareService.prototype.addNewUser = function (data) {
        console.log("Da Add");
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

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var BASE_URL = "http://laravel.sega-group.com/";
/* harmony default export */ __webpack_exports__["a"] = (BASE_URL);
//# sourceMappingURL=BASE_URL.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(114);
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




var AdminService = (function () {
    function AdminService(_http) {
        this._http = _http;
    }
    AdminService.prototype.getAdmin = function (condition) {
        console.log(condition);
        return this._http.get('getListAdmin', condition);
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

/***/ })

},[233]);
//# sourceMappingURL=main.js.map