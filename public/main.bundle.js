webpackJsonp([1,4],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_service__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryService = (function () {
    function GalleryService(http, rootService) {
        this.http = http;
        this.rootService = rootService;
        this.root = this.rootService.root;
    }
    GalleryService.prototype.getGallery = function (gallery_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.root + 'galleries/gallery', gallery_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GalleryService.prototype.getGalleryByOwner = function (gallery) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.root + 'galleries/galleryown', gallery, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GalleryService.prototype.createGallery = function (owner) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.root + 'galleries/new', owner, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GalleryService.prototype.saveGallery = function (gallery) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.root + 'galleries/save', gallery, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GalleryService.prototype.getGalleries = function (owner) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.root + 'galleries/galleries', owner, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GalleryService.prototype.removeGallery = function (gallery_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.root + 'galleries/remove', gallery_id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GalleryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__root_service__["a" /* RootService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__root_service__["a" /* RootService */]) === 'function' && _b) || Object])
    ], GalleryService);
    return GalleryService;
    var _a, _b;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/gallery.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Provides the location of the server root.
var RootService = (function () {
    function RootService() {
        this.port = 3000;
        this.root = 'http://' + window.location.hostname + ':' + this.port + '/';
        //console.log(window.location);
        console.log(this.root);
    }
    RootService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], RootService);
    return RootService;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/root.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarService = (function () {
    function NavbarService() {
        this.hidden = false;
    }
    NavbarService.prototype.hide = function () { this.hidden = true; };
    NavbarService.prototype.show = function () { this.hidden = false; };
    NavbarService.prototype.toggle = function () { this.hidden = !this.hidden; };
    NavbarService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], NavbarService);
    return NavbarService;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/navbar.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_service__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = (function () {
    function UploadService(http, rootService) {
        this.http = http;
        this.rootService = rootService;
        this.root = this.rootService.root;
    }
    UploadService.prototype.uploadImage = function (file, img_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('img_id', img_id);
        return this.http.post(this.root + 'uploads/image', file, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UploadService.prototype.removeImage = function (filepath) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.root + 'uploads/remove', filepath, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UploadService.prototype.getFileSizeLimit = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.root + 'uploads/sizelimit', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UploadService.prototype.getUploadPath = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.root + 'uploads/path', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UploadService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__root_service__["a" /* RootService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__root_service__["a" /* RootService */]) === 'function' && _b) || Object])
    ], UploadService);
    return UploadService;
    var _a, _b;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/upload.service.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/validate.service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__root_service__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, rootService) {
        this.http = http;
        this.rootService = rootService;
        this.root = this.rootService.root;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.root + 'users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.root + 'users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.root + 'users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        if ('id_token') {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__root_service__["a" /* RootService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__root_service__["a" /* RootService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/auth.service.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 399;


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(518);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/main.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(698),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/app.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_popover__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_gallery_gallery_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_galleries_galleries_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_galleryedit_galleryedit_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_gallery_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_upload_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_navbar_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_root_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__ = __webpack_require__(527);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    /*{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},*/
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'gallery/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'galleries', component: __WEBPACK_IMPORTED_MODULE_13__components_galleries_galleries_component__["a" /* GalleriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'galleryedit/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_galleryedit_galleryedit_component__["a" /* GalleryeditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                /*DashboardComponent,*/
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_galleries_galleries_component__["a" /* GalleriesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_galleryedit_galleryedit_component__["a" /* GalleryeditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_popover__["PopoverModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_18__services_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_19__services_navbar_service__["a" /* NavbarService */], __WEBPACK_IMPORTED_MODULE_20__services_root_service__["a" /* RootService */], __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/app.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GalleriesComponent = (function () {
    function GalleriesComponent(galleryService, authService, flashMessage, router, route) {
        this.galleryService = galleryService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
    }
    GalleriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.userName = profile.user.username;
            _this.gallerySub = _this.galleryService.getGalleries({ owner: _this.userName }).subscribe(function (data) {
                if (data.success) {
                    _this.galleries = data.galleries;
                    for (var i = 0; i < _this.galleries.length; i++) {
                        if (_this.galleries[i].customizations[0]) {
                            if (_this.galleries[i].customizations[0].options[0]) {
                                if (_this.galleries[i].customizations[0].options[0].imagePath) {
                                    _this.galleries[i].thumb = true;
                                }
                            }
                        }
                    }
                    console.log(_this.galleries);
                }
                else {
                    _this.flashMessage.show('Galleriaa ei voitu ladata :(', { cssClass: 'toast toast-alert', timeout: 1000 });
                }
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Create a new gallery.
    GalleriesComponent.prototype.newGallery = function () {
        var _this = this;
        var owner = { owner: this.userName };
        this.newGallerySub = this.galleryService.createGallery(owner).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/galleryedit', data.id]);
            }
            else {
                _this.flashMessage.show('Galleriaa ei voitu luoda :(', { cssClass: 'toast toast-alert', timeout: 1000 });
                console.log(data.msg);
            }
        });
    };
    GalleriesComponent.prototype.viewGallery = function (gallery_id) {
        this.router.navigate(['/gallery', gallery_id]);
    };
    // Unsub on destroy to remove any potential memory leaks.
    GalleriesComponent.prototype.ngOnDestroy = function () {
        this.gallerySub.unsubscribe();
        if (this.newGallerySub) {
            this.newGallerySub.unsubscribe();
        }
    };
    GalleriesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-galleries',
            template: __webpack_require__(699),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], GalleriesComponent);
    return GalleriesComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/galleries.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GalleryComponent = (function () {
    function GalleryComponent(galleryService, authService, router, route, nav) {
        this.galleryService = galleryService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.nav = nav;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        var id = this.route.snapshot.params['id'];
        // Check for hide navigation.
        if (this.route.snapshot.queryParams['hidenav']) {
            this.nav.hide();
        }
        this.id_object = { gallery_id: id };
        this.gallery_id = id;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (profile) {
                _this.userName = profile.user.username;
                _this.checkOwner();
            }, function (err) {
                console.log(err);
                return false;
            });
        }
        this.gallerySub = this.galleryService.getGallery(this.id_object).subscribe(function (gallery) {
            _this.gallery = gallery.gallery;
            // Set preview images for the option.
            for (var i = 0; i < _this.gallery.customizations.length; i++) {
                var customs = _this.gallery.customizations[i];
                // Make option thumbnail same as its  image if no thumbnail exists.
                for (var j = 0; j < customs.options.length; j++) {
                    var option = customs.options[j];
                    option.thumbPath = (option.thumbPath) ? option.thumbPath : option.imagePath;
                }
                // Set the selected values in each customization to the first option in the array.
                customs.selected = {
                    id: 'canvas-' + i + '-' + 0,
                    name: _this.gallery.customizations[i].options[0].name
                };
            }
            _this.checkOwner();
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Check if the current gallery viewer is the owner.
    GalleryComponent.prototype.checkOwner = function () {
        if (this.userName && this.gallery) {
            if (this.userName == this.gallery.owner) {
                this.isOwner = true;
            }
        }
    };
    // Change a customization option.
    GalleryComponent.prototype.changeCustomization = function (e, customization) {
        e.stopPropagation();
        var i = customization.which;
        var j = customization.index;
        this.gallery.customizations[i].selected.id = 'canvas-' + i + '-' + j;
        this.gallery.customizations[i].selected.name = this.gallery.customizations[i].options[j].name;
        $(e.target).addClass("active").removeClass("nonactive").siblings().addClass("nonactive");
    };
    GalleryComponent.prototype.ngOnDestroy = function () {
        this.gallerySub.unsubscribe();
    };
    GalleryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(700),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__["a" /* NavbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__["a" /* NavbarService */]) === 'function' && _e) || Object])
    ], GalleryComponent);
    return GalleryComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/gallery.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_upload_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryeditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//declare var uploadSizeLimit:any;
var GalleryeditComponent = (function () {
    function GalleryeditComponent(galleryService, authService, uploadService, flashMessage, router, route) {
        this.galleryService = galleryService;
        this.authService = authService;
        this.uploadService = uploadService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
    }
    GalleryeditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gallery = {
            header: "Loading..."
        };
        this.preview = {
            image: {
                width: 0,
                height: 0
            },
            thumb: {
                width: 0,
                height: 0
            }
        };
        this.pathsToRemove = [];
        this.authService.getProfile().subscribe(function (profile) {
            var owner = profile.user.username;
            var idString = _this.route.snapshot.params['id'];
            var id = { gallery_id: idString };
            _this.pathToGallery = window.location.origin + '/gallery/' + idString;
            // Find the owner's gallery with the requested id.
            _this.gallerySub = _this.galleryService.getGalleryByOwner({ "owner": owner, "gallery_id": idString }).subscribe(function (gallery) {
                // Only show the gallery if it's owned by the current user.
                _this.gallery = (gallery.gallery && owner == gallery.gallery.owner) ? gallery.gallery : undefined;
                if (_this.gallery) {
                    // Set preview images for the option.
                    for (var i = 0; i < _this.gallery.customizations.length; i++) {
                        for (var j = 0; j < _this.gallery.customizations[i].options.length; j++) {
                            if (_this.gallery.customizations[i].options[j].imagePath) {
                                _this.gallery.customizations[i].options[j].imagePreview = _this.gallery.customizations[i].options[j].imagePath;
                            }
                            if (_this.gallery.customizations[i].options[j].thumbPath) {
                                _this.gallery.customizations[i].options[j].thumbPreview = _this.gallery.customizations[i].options[j].thumbPath;
                            }
                        }
                    }
                    // Get the upload file size limit.
                    _this.fileSizeSub = _this.uploadService.getFileSizeLimit().subscribe(function (limit) {
                        _this.fileSizeLimit = (limit.fileSizeLimit) ? limit.fileSizeLimit : 2097152;
                        _this.uploadLimit = Math.floor(_this.fileSizeLimit / 1000000);
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                    // Get the upload path limit.
                    _this.pathSub = _this.uploadService.getUploadPath().subscribe(function (path) {
                        _this.uploadPath = path.path;
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                }
                else {
                    _this.flashMessage.show('Galleriaa ei voitu ladata :(', { cssClass: 'toast toast-alert', timeout: 1000 });
                    console.log(gallery);
                }
            }, function (err) {
                console.log(err);
                return false;
            });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    GalleryeditComponent.prototype.ngAfterViewChecked = function () {
        if (this.imagePreview) {
            this.preview.image.height = this.imagePreview.nativeElement.offsetHeight - 16;
            this.preview.image.width = this.preview.image.height * 1.7777777777777777; // 16:9
            this.imagePreview = undefined;
        }
        if (this.thumbPreview) {
            this.preview.thumb.height = this.thumbPreview.nativeElement.offsetHeight - 16;
            this.preview.thumb.width = this.preview.thumb.height; // 1:1
            this.thumbPreview = undefined;
        }
    };
    // Mark the gallery as changed (for saving purposes) after any input change.
    GalleryeditComponent.prototype.inputChanged = function () {
        this.changed = true;
    };
    GalleryeditComponent.prototype.enterImage = function (e, option) {
        if (e.key == "Enter") {
            e.target.click();
        }
    };
    // Start the drag.
    GalleryeditComponent.prototype.dragStart = function (e, option) {
        e.preventDefault();
        e.stopPropagation();
        var i = option.which;
        var j = option.index;
        var type = option.type;
        document.getElementById(type + "zone-" + i + "-" + j).classList.add("upload-allowed");
        document.getElementById(type + "zone-" + i + "-" + j).classList.remove("upload-disallowed");
    };
    // Stop the drag.
    GalleryeditComponent.prototype.dragStop = function (e, option) {
        e.preventDefault();
        e.stopPropagation();
        var i = option.which;
        var j = option.index;
        var type = option.type;
        document.getElementById(type + "zone-" + i + "-" + j).classList.remove("upload-allowed");
        document.getElementById(type + "zone-" + i + "-" + j).classList.remove("upload-disallowed");
    };
    // Drop the file.
    GalleryeditComponent.prototype.dropFile = function (e, option) {
        e.preventDefault();
        option.file = e.dataTransfer.files[0];
        this.dragStop(e, option);
        this.changeImage(e, option);
    };
    // Change image. Either the big image or the thumb.
    //TODO: Reduce lag when uploading multiple images at once.
    GalleryeditComponent.prototype.changeImage = function (e, option) {
        //console.log(e);
        var allowedFiletypes = "jpeg|jpg|png|gif";
        var i = option.which;
        var j = option.index;
        var type = option.type;
        var opt = this.gallery.customizations[i].options[j];
        if (opt[type + 'Path']) {
            opt[type + 'Remove'] = opt[type + 'Path'];
        }
        var file = (option.file) ? option.file : e.target.files[0];
        if (file.type.match(allowedFiletypes)) {
            // Don't allow images over certain size. (Defined in the main app file)
            if (file.size <= this.fileSizeLimit) {
                // Compress the preview images.
                opt[type + 'Name'] = file.name;
                opt[type + 'File'] = file;
                var that_1 = this;
                var reader = new FileReader();
                reader.onload = function (evt) {
                    var targetWidth, targetHeight;
                    var quality = 2; // Rendering resolution factor for thumbnails.
                    if (type == 'image') {
                        targetWidth = that_1.preview.image.width * quality || 300 * quality;
                        targetHeight = that_1.preview.image.height * quality || 169 * quality;
                    }
                    else {
                        targetWidth = targetHeight = that_1.preview.thumb.width * quality;
                    }
                    var img = new Image();
                    img.onload = function () {
                        var targetCanvas = document.createElement('canvas');
                        var targetCtx = targetCanvas.getContext('2d');
                        targetCanvas.width = targetWidth;
                        targetCanvas.height = targetHeight;
                        targetCtx.drawImage(img, 0, 0, targetCanvas.width, targetCanvas.height);
                        // Change non-opaque pixels to white
                        var imgData = targetCtx.getImageData(0, 0, targetCanvas.width, targetCanvas.height);
                        var data = imgData.data;
                        for (var i = 0; i < data.length; i += 4) {
                            if (data[i + 3] < 128) {
                                data[i] = 255;
                                data[i + 1] = 255;
                                data[i + 2] = 255;
                                data[i + 3] = 255;
                            }
                        }
                        targetCtx.putImageData(imgData, 0, 0);
                        var dataURL = targetCanvas.toDataURL('image/jpeg', 0.75);
                        opt[type + 'Preview'] = dataURL; //evt.target.result;
                        targetCanvas.remove();
                        this.remove();
                    };
                    img.src = evt.target.result;
                };
                reader.readAsDataURL(file);
                this.changed = true;
            }
            else {
                this.flashMessage.show('Tiedosto on liian iso!', { cssClass: 'toast toast-alert', timeout: 1000 });
                document.getElementById(type + "zone-" + i + "-" + j).classList.add("upload-disallowed");
            }
        }
        else {
            document.getElementById(type + "zone-" + i + "-" + j).classList.add("upload-disallowed");
        }
    };
    // Remove image from a customization option.
    GalleryeditComponent.prototype.removeImage = function (option) {
        var i = option.which;
        var j = option.index;
        var type = option.type;
        var opt = this.gallery.customizations[i].options[j];
        opt[type + 'Remove'] = opt[type + 'Path'];
        opt[type + 'Path'] = undefined;
        opt[type + 'Preview'] = undefined;
        // Reset the input value.
        document.getElementById(type + "-" + i + "-" + j).value = "";
        this.changed = true;
    };
    // Remove an option from a customization.
    GalleryeditComponent.prototype.removeOption = function (option) {
        var i = option.which;
        var j = option.index;
        // Remove any images in the option.
        var pathsToDestroy = [
            this.gallery.customizations[i].options[j].imagePath,
            this.gallery.customizations[i].options[j].thumbPath,
            this.gallery.customizations[i].options[j].imageRemove,
            this.gallery.customizations[i].options[j].thumbRemove
        ];
        for (var k = 0; k < pathsToDestroy.length; k++) {
            if (pathsToDestroy[k]) {
                this.pathsToRemove.push(pathsToDestroy[k]);
            }
        }
        this.gallery.customizations[i].options.splice(j, 1);
        this.changed = true;
        this.flashMessage.show('Vaihtoehto poistettu', { cssClass: 'toast toast-alert', timeout: 1000 });
    };
    // Remove a customization from the gallery.
    GalleryeditComponent.prototype.removeCustomization = function (i) {
        // Remove any customization option images.
        for (var j = 0; j < this.gallery.customizations[i].options.length; j++) {
            // Remove any images in the option.
            var pathsToDestroy = [
                this.gallery.customizations[i].options[j].imagePath,
                this.gallery.customizations[i].options[j].thumbPath,
                this.gallery.customizations[i].options[j].imageRemove,
                this.gallery.customizations[i].options[j].thumbRemove
            ];
            for (var k = 0; k < pathsToDestroy.length; k++) {
                if (pathsToDestroy[k]) {
                    this.pathsToRemove.push(pathsToDestroy[k]);
                }
            }
        }
        this.gallery.customizations.splice(i, 1);
        this.changed = true;
        this.flashMessage.show('Kustomointi poistettu', { cssClass: 'toast toast-alert', timeout: 1000 });
    };
    // Add an option to a customization.
    GalleryeditComponent.prototype.addOption = function (index) {
        this.gallery.customizations[index].options.push({
            name: ""
        });
        this.changed = true;
        this.flashMessage.show('Vaihtoehto lisätty', { cssClass: 'toast toast-success', timeout: 1000 });
    };
    // Add a customization to the gallery.
    GalleryeditComponent.prototype.addCustomization = function () {
        //console.log(this.gallery.customizations);
        this.gallery.customizations.push({
            title: "",
            options: [{
                    name: ""
                }]
        });
        this.changed = true;
        this.flashMessage.show('Kustomointi lisätty', { cssClass: 'toast toast-success', timeout: 1000 });
    };
    // Init the gallery save.
    GalleryeditComponent.prototype.initSaveGallery = function () {
        var _this = this;
        //console.log("initSaveGallery.");
        if (!this.saving) {
            this.saving = true;
            this.imageCount = 0;
            for (var i = 0; i < this.gallery.customizations.length; i++) {
                var _loop_1 = function(j) {
                    var option = this_1.gallery.customizations[i].options[j];
                    // Check any image files to remove from the server.
                    var imagesToRemove = [{ file: option.imageRemove, type: 'image' }, { file: option.thumbRemove, type: 'thumb' }]; /*[option.imageRemove, option.thumbRemove];*/
                    if (imagesToRemove.length > 0) {
                        var _loop_2 = function(k) {
                            if (imagesToRemove[k].file != undefined) {
                                this_1.imageCount++;
                                var pathToRemove = { path: imagesToRemove[k].file.substring(0) };
                                this_1.uploadService.removeImage(pathToRemove).subscribe(function (data) {
                                    console.log(data);
                                    if (data.success) {
                                        option[imagesToRemove[k].type + 'Remove'] = undefined;
                                        _this.imageCount--;
                                        _this.trySaveGallery();
                                    }
                                    else {
                                        console.log(data.msg);
                                        _this.flashMessage.show('Kuvaa ei voitu poistaa :(', { cssClass: 'toast toast-alert', timeout: 1000 });
                                    }
                                });
                            }
                        };
                        for (var k = 0; k < imagesToRemove.length; k++) {
                            _loop_2(k);
                        }
                    }
                    // Check any image files to save to the server.
                    var imagesToSave = [{ file: option.imageFile, type: 'image' }, { file: option.thumbFile, type: 'thumb' }];
                    if (imagesToSave.length > 0) {
                        var _loop_3 = function(k) {
                            if (imagesToSave[k].file != undefined) {
                                this_1.imageCount++;
                                var formData = new FormData();
                                formData.append('img', imagesToSave[k].file);
                                // Assign an image id to the uploaded image as a part of its filename.
                                var imgID = imagesToSave[k].type + '-' + this_1.gallery.owner + '-' + i + '-' + j;
                                this_1.uploadService.uploadImage(formData, imgID).subscribe(function (data) {
                                    if (data.success) {
                                        option[imagesToSave[k].type + 'Path'] = _this.uploadPath.substring(2) + '/' + data.file.filename;
                                        option[imagesToSave[k].type + 'Name'] = data.file.originalname;
                                        option[imagesToSave[k].type + 'File'] = undefined;
                                        console.log(option[imagesToSave[k].type + 'Path']);
                                        _this.imageCount--;
                                        _this.trySaveGallery();
                                    }
                                    else {
                                        console.log(data.msg);
                                        _this.flashMessage.show('Kuvaa ei voitu tallentaa :(', { cssClass: 'toast toast-alert', timeout: 1000 });
                                    }
                                });
                            }
                        };
                        for (var k = 0; k < imagesToSave.length; k++) {
                            _loop_3(k);
                        }
                    }
                };
                var this_1 = this;
                for (var j = 0; j < this.gallery.customizations[i].options.length; j++) {
                    _loop_1(j);
                }
            }
            // Check for any additional images to remove.
            for (var i = 0; i < this.pathsToRemove.length; i++) {
                this.imageCount++;
                var pathToRemove = { path: this.pathsToRemove[i].substring(3) };
                this.uploadService.removeImage(pathToRemove).subscribe(function (data) {
                    if (data.success) {
                        _this.imageCount--;
                        _this.trySaveGallery();
                    }
                    else {
                        console.log(data.msg);
                        _this.flashMessage.show('Kuvaa ei voitu poistaa :(', { cssClass: 'toast toast-alert', timeout: 1000 });
                    }
                });
            }
            this.pathsToRemove = [];
            this.trySaveGallery();
        }
    };
    // Try to save the gallery if there are no images left to upload.
    GalleryeditComponent.prototype.trySaveGallery = function () {
        //console.log('Trying to save gallery..');
        if (this.imageCount == 0) {
            this.saveGallery();
        }
    };
    // Save the gallery to the database.
    GalleryeditComponent.prototype.saveGallery = function () {
        var _this = this;
        //console.log('Saving gallery...');
        var gallery = {
            gallery_id: this.gallery.gallery_id,
            owner: this.gallery.owner,
            header: this.gallery.header,
            customizations: JSON.parse(JSON.stringify(this.gallery.customizations)) // Create a deep copy of the array to allow remove some properties that are not sent to the server.
        };
        // Remove image preview and file from being sent to the server.
        for (var _i = 0, _a = gallery.customizations; _i < _a.length; _i++) {
            var customization = _a[_i];
            for (var _b = 0, _c = customization.options; _b < _c.length; _b++) {
                var option = _c[_b];
                option.imageFile = undefined;
                option.imagePreview = undefined;
                option.thumbFile = undefined;
                option.thumbPreview = undefined;
            }
        }
        this.saveGallerySub = this.galleryService.saveGallery(gallery).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessage.show('Galleria tallennettu', { cssClass: 'toast toast-info', timeout: 1000 });
                _this.changed = false;
            }
            else {
                console.log(data.msg);
                _this.flashMessage.show('Galleriaa ei voitu tallentaa :(', { cssClass: 'toast toast-alert', timeout: 1000 });
            }
            _this.saving = false;
        });
    };
    // Remove the gallery from the database.
    GalleryeditComponent.prototype.initRemoveGallery = function () {
        this.imageCount = 0;
        var that = this; // Because this can't be directly referenced inside the callback.
        // Confirm before removing the gallery.
        bootbox.confirm({
            title: "Poistetaanko galleria?",
            message: "Haluatko varmasti poistaa tämän gallerian? Tätä ei voi peruuttaa.",
            buttons: {
                cancel: {
                    label: '<i class="fa fa-times"></i> Peruuta'
                },
                confirm: {
                    label: '<i class="fa fa-check"></i> Kyllä'
                }
            },
            callback: function (confirm) {
                var _this = this;
                if (confirm) {
                    if (that.gallery.customizations) {
                        for (var i = 0; i < that.gallery.customizations.length; i++) {
                            for (var j = 0; j < that.gallery.customizations[i].options.length; j++) {
                                var option = that.gallery.customizations[i].options[j];
                                // Check any image files to remove from the server.
                                var imagesToRemove = [option.imagePath, option.thumbPath, option.imageRemove, option.thumbRemove];
                                if (imagesToRemove.length > 0) {
                                    for (var k = 0; k < imagesToRemove.length; k++) {
                                        if (imagesToRemove[k] != undefined) {
                                            that.imageCount++;
                                            var pathToRemove = { path: imagesToRemove[k].substring(0) };
                                            that.uploadService.removeImage(pathToRemove).subscribe(function (data) {
                                                //console.log(data);
                                                if (data.success) {
                                                    that.imageCount--;
                                                    that.tryRemoveGallery(that);
                                                }
                                                else {
                                                    //console.log(data.msg);
                                                    _this.flashMessage.show('Kuvaa ei voitu poistaa :(', { cssClass: 'toast toast-alert', timeout: 1000 });
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                    that.tryRemoveGallery(that);
                }
                return;
            },
            backdrop: true
        });
    };
    // Try to remove the gallery.
    GalleryeditComponent.prototype.tryRemoveGallery = function (that) {
        if (that.imageCount == 0) {
            that.removeGallery(that);
        }
    };
    // Remove the gallery.
    GalleryeditComponent.prototype.removeGallery = function (that) {
        var _this = this;
        console.log("Removing gallery...");
        that.removeGallerySub = that.galleryService.removeGallery({ gallery_id: that.gallery.gallery_id }).subscribe(function (data) {
            if (data.success) {
                that.router.navigate(['/galleries']);
            }
            else {
                console.log(data.msg);
                _this.flashMessage.show('Galleriaa ei voitu poistaa :(', { cssClass: 'toast toast-alert', timeout: 1000 });
            }
        });
    };
    // Show the embed link.
    GalleryeditComponent.prototype.embedLink = function () {
        this.showLink = true;
        //Get Input Element
        var copyDiv = document.getElementById('embedlink');
        copyDiv.style.display = "block";
        //Give the text element focus
        copyDiv.focus();
        //Select all content
        document.execCommand('SelectAll');
        //Copy Content
        document.execCommand("Copy", false, null);
        //copyDiv.blur();
        this.flashMessage.show('Linkki kopioitu', { cssClass: 'toast toast-success', timeout: 1000 });
    };
    GalleryeditComponent.prototype.exitGallery = function (where) {
        // Confirm before removing the gallery.
        if (this.changed) {
            var that_2 = this;
            bootbox.confirm({
                title: "Poistutaanko tallentamatta?",
                message: "Galleriaa on muutettu viime tallennuksen jälkeen. Haluatko poistua tallentamatta?",
                buttons: {
                    cancel: {
                        label: '<i class="fa fa-times"></i> Peruuta'
                    },
                    confirm: {
                        label: '<i class="fa fa-check"></i> Kyllä'
                    }
                },
                callback: function (confirm) {
                    if (confirm) {
                        that_2.router.navigate(['/' + where]);
                    }
                    return;
                },
                backdrop: true
            });
        }
        else {
            this.router.navigate(['/' + where]);
        }
    };
    // Unsub on destroy to remove any potential memory leaks.
    GalleryeditComponent.prototype.ngOnDestroy = function () {
        this.gallerySub.unsubscribe();
        if (this.saveGallerySub) {
            this.saveGallerySub.unsubscribe();
        }
        if (this.removeGallerySub) {
            this.removeGallerySub.unsubscribe();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imagePreview'), 
        __metadata('design:type', Object)
    ], GalleryeditComponent.prototype, "imagePreview", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('thumbPreview'), 
        __metadata('design:type', Object)
    ], GalleryeditComponent.prototype, "thumbPreview", void 0);
    GalleryeditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-galleryedit',
            template: __webpack_require__(701),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === 'function' && _f) || Object])
    ], GalleryeditComponent);
    return GalleryeditComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/galleryedit.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(702),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/home.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Olet nyt kirjautunut sisään', {
                    cssClass: 'alert-success',
                    timeout: 2000 });
                _this.router.navigate(['galleries/']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 2000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(703),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/login.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage, nav) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.nav = nav;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Olet kirjautunut ulos', {
            cssClass: 'alert-success',
            timeout: 2000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(704),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__["a" /* NavbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_navbar_service__["a" /* NavbarService */]) === 'function' && _d) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(705),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/profile.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(706),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/register.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=F:/Projects/Rouhia/Avaroom/productCustomizer/meanauthapp/angular-src/src/environment.js.map

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ".galleries-container {\r\n  display: block;\r\n  /*justify-content: center;*/\r\n}\r\n\r\n.galleries-thumb-btn {\r\n\tbackground: none;\r\n\tborder: 0px solid white;\r\n\tborder-radius: 8px;\r\n\toutline: none;\r\n\tmargin: 10px;\r\n\t/*box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.225);*/\r\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);\r\n  /*width: 30%;*/\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  color: #333;\r\n}\r\n\r\n.galleries-thumb-frame {\r\n  position: relative;\r\n  padding: 0;\r\n  background: none;\r\n  /*border: 1px solid #fff;*/\r\n  border-radius: 8px;\r\n  margin: 5px;\r\n  /*border-radius: 50%;*/\r\n  overflow: hidden;\r\n  outline: none;\r\n}\r\n \r\n.galleries-thumb-frame:focus {\r\n  border-color: #666;\r\n}\r\n\r\n.galleries-thumb-frame:before{\r\n  content: \"\";\r\n  display: block;\r\n  padding-top: calc(9/16 * 100%);  /* aspect ratio 16:9 */\r\n  min-width: 50px;\r\n}\r\n\r\n\r\n.galleries-thumb-title {\r\n\ttext-align: center;\r\n  color: #333;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.galleries-thumb {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.icon {\r\n    margin: 0 auto;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n\r\n    fill: #DDD;\r\n    stroke: #DDD;\r\n    stroke-width: 0.1;\r\n    stroke-linejoin: round;\r\n}\r\n\r\n.galleries-btn-view {\r\n    border: none;\r\n    border-top: 1px solid #ccc;\r\n    background-color: transparent;\r\n    width: calc(100% + 30px);\r\n    font-size: 150%;\r\n    border-radius: 2px;\r\n    transition: background-color 0.15s ease-in-out 0s;\r\n    margin: 0 -15px;\r\n    padding: 10px;\r\n    display: block;\r\n}\r\n\r\n.galleries-btn-view:hover {\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.galleries-btn-edit {\r\n    transition: background-color 0.15s ease-in-out 0s;\r\n    padding-bottom: 5px;\r\n    border-radius: 2px;\r\n    margin: -15px -15px 0 -15px;\r\n    padding: 15px 15px 5px 15px;\r\n}\r\n\r\n.galleries-btn-edit:hover {\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.galleries-new {\r\n  transition: background-color 0.15s ease-in-out 0s;\r\n}\r\n\r\n.galleries-new:hover {\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ".product-container {\r\n  overflow: hidden;\r\n}\r\n\r\n.product-display {\r\n}\r\n\r\n.product-image-container {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.product-image-container:before{\r\n  content: \"\";\r\n  display: block;\r\n  padding-top: 100%;  /* initial ratio of 1:1*/\r\n  padding-top: calc(9/16 * 100%); /* aspect ratio 16:9 */\r\n  min-width: 50px;\r\n}\r\n\r\n.product-image {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background-size: contain;\r\n\r\n  /* Force hardware acceleration. */\r\n  transform: translate3d(0, 0, 0);\r\n  backface-visibility: hidden;\r\n  perspective: 1000;\r\n\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  -webkit-perspective: 1000;\r\n\r\n  -moz-transform: translate3d(0, 0, 0);\r\n  -moz-backface-visibility: hidden;\r\n  -moz-perspective: 1000;\r\n\r\n  -ms-transform: translate3d(0, 0, 0);\r\n  -ms-backface-visibility: hidden;\r\n  -ms-perspective: 1000;\r\n\r\n  backface-visibility: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n  -moz-backface-visibility:    hidden;\r\n  -ms-backface-visibility:     hidden;\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.product-name {\r\n  font-size: 175%;\r\n}\r\n\r\n.product-customization {\r\n  clear: both;\r\n  float: left;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.product-customization-title {\r\n  font-size: 150%;\r\n}\r\n\r\n.product-customization-subtitle {\r\n  font-size: 125%;\r\n}\r\n\r\n.product-customization-btn {\r\n  position: relative;\r\n  padding: 0;\r\n  background: none;\r\n  border: 1px solid #CCC;\r\n  margin: 5px;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  outline: none;\r\n  background-color: #F8F8F8;\r\n}\r\n\r\n.product-customization-btn:focus {\r\n  border-color: #666;\r\n}\r\n\r\n.product-customization-btn:before{\r\n  content: \"\";\r\n  display: block;\r\n  padding-top: 100%;  /* initial ratio of 1:1*/\r\n  min-width: 50px;\r\n}\r\n\r\n.product-thumb-frame {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.product-thumb {\r\n  border-radius: 50%;\r\n  width: 80%;\r\n  height: 80%;\r\n  margin: 0 auto;\r\n  display: block;\r\n  border: 1px solid #eee;\r\n\r\n  /* Center the image vertically. */\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: perspective(1px) translateY(-50%);\r\n          transform: perspective(1px) translateY(-50%);\r\n}\r\n\r\n.btn-group, .btn-group-vertical {\r\n    width: 100%;\r\n}\r\n\r\n.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle) {\r\n    border-radius: 50%;\r\n}\r\n\r\n.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\r\n    border-radius: 50%;\r\n}\r\n\r\n.btn-group>.btn:last-child:not(:first-child), .btn-group>.dropdown-toggle:not(:first-child) {\r\n    border-radius: 50%;\r\n}\r\n\r\n.focus {\r\n  outline: none !important;\r\n}\r\n\r\n.btn:active {\r\n    outline: 0;\r\n    background-image: none;\r\n}\r\n\r\n.btn.active {\r\n    -webkit-animation: rise 0.1s ease-in-out 0s 1 normal forwards;\r\n            animation: rise 0.1s ease-in-out 0s 1 normal forwards;\r\n}\r\n\r\n.btn.nonactive {\r\n    -webkit-animation: fall 0.1s ease-in-out 0s 1 normal forwards;\r\n            animation: fall 0.1s ease-in-out 0s 1 normal forwards;\r\n}\r\n\r\n@-webkit-keyframes rise {\r\n  0% {\r\n    background-color: #F8F8F8;\r\n    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.225)\r\n  }\r\n  100% {\r\n    background-color: #FFFFFF;\r\n    box-shadow: 0 2px 4px 2px rgba(0,0,0,0.14), 0 1px 10px 2px rgba(0,0,0,0.12), 0px 8px 6px -2px rgba(0,0,0,0.2);\r\n  }\r\n}\r\n\r\n@keyframes rise {\r\n  0% {\r\n    background-color: #F8F8F8;\r\n    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.225)\r\n  }\r\n  100% {\r\n    background-color: #FFFFFF;\r\n    box-shadow: 0 2px 4px 2px rgba(0,0,0,0.14), 0 1px 10px 2px rgba(0,0,0,0.12), 0px 8px 6px -2px rgba(0,0,0,0.2);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fall {\r\n  0% {\r\n    background-color: #FFFFFF;\r\n    box-shadow: 0 2px 4px 2px rgba(0,0,0,0.14), 0 1px 10px 2px rgba(0,0,0,0.12), 0px 8px 6px -2px rgba(0,0,0,0.2);\r\n  }\r\n  100% {\r\n    background-color: #F8F8F8;\r\n    box-shadow: 0 1px 2px 1px rgba(0,0,0,0.07), 0 0.5px 5px 1px rgba(0,0,0,0.06), 0px 4px 3px -4px rgba(0,0,0,0.1);\r\n  }\r\n}\r\n\r\n@keyframes fall {\r\n  0% {\r\n    background-color: #FFFFFF;\r\n    box-shadow: 0 2px 4px 2px rgba(0,0,0,0.14), 0 1px 10px 2px rgba(0,0,0,0.12), 0px 8px 6px -2px rgba(0,0,0,0.2);\r\n  }\r\n  100% {\r\n    background-color: #F8F8F8;\r\n    box-shadow: 0 1px 2px 1px rgba(0,0,0,0.07), 0 0.5px 5px 1px rgba(0,0,0,0.06), 0px 4px 3px -4px rgba(0,0,0,0.1);\r\n  }\r\n}\r\n\r\n.btn-gallery-edit {\r\n    clear: both;\r\n}\r\n\r\n.imageVisible {\r\n  z-index: 999;\r\n  -webkit-animation: show 0.1s ease-in-out 0s 1 normal forwards;\r\n          animation: show 0.1s ease-in-out 0s 1 normal forwards;\r\n \r\n}\r\n\r\n.imageHidden {\r\n  z-index: 1;\r\n  -webkit-animation: hide 0.11s ease-in-out 0s 1 normal forwards;\r\n          animation: hide 0.11s ease-in-out 0s 1 normal forwards;\r\n}\r\n\r\n@-webkit-keyframes show {\r\n  0% {\r\n    opacity: 0;\r\n   \r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes show {\r\n  0% {\r\n    opacity: 0;\r\n   \r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes hide {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  99% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n\r\n@keyframes hide {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  99% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ".wrap {\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.customization {\r\n    background-color: #FEFEFE;\r\n\t/*border: 1px solid #EEE;*/\r\n\tborder-radius: 4px;\r\n\tpadding: 20px;\r\n\tmargin-bottom: 25px;\r\n    margin-top: 25px;\r\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.07), 0 1px 5px 0 rgba(0,0,0,0.06), 0 3px 1px -2px rgba(0,0,0,0.1);\r\n}\r\n\r\n.option {\r\n    background-color: #FDFDFD;\r\n\tborder: 1px solid #DDD;\r\n\tborder-radius: 4px;\r\n\tpadding: 20px;\r\n\tmargin-bottom: 20px;\r\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.07), 0 1px 5px 0 rgba(0,0,0,0.06), 0 3px 1px -2px rgba(0,0,0,0.1);\r\n}\r\n\r\n.custom-input {\r\n    background-color: #FFF;\r\n}\r\n\r\n.form-control {\r\n\tborder: 1px solid #CCC;\r\n}\r\n\r\n.customization-btn {\r\n\tmargin-top: 0px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n*, ::after, ::before {\r\n    box-sizing: inherit;\r\n}\r\n\r\n.upload-container {\r\n    position: relative;\r\n    background-size: contain;\r\n    height: 185px;\r\n    overflow: hidden;\r\n    background-repeat: no-repeat;\r\n    border: 2px #eee dashed;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 5px 5px;\r\n}\r\n\r\n.upload-container-thumb {\r\n    position: relative;\r\n    background-size: contain;\r\n    height: 100px;\r\n    overflow: hidden;\r\n    background-repeat: no-repeat;\r\n    border: 2px #eee dashed;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 5px 5px;\r\n}\r\n\r\n.upload-allowed {\r\n    /*border: 2px #6f6 dashed;*/\r\n    border: 2px #666 dashed;\r\n}\r\n\r\n.upload-disallowed {\r\n    -webkit-animation: flash 0.5s linear 0s 1 normal;\r\n            animation: flash 0.5s linear 0s 1 normal;\r\n    /*border: 2px #faa dashed;*/\r\n}\r\n\r\n.upload-hascontent {\r\n    border-color: #CCC;\r\n    /*border: 2px #ccc dashed;*/\r\n}\r\n\r\n@-webkit-keyframes flash {\r\n    0%, 50%, 100% {\r\n       border-color: #f66;\r\n    }\r\n    25%, 75% {\r\n       border-color: #eee;\r\n    }\r\n}\r\n\r\n@keyframes flash {\r\n    0%, 50%, 100% {\r\n       border-color: #f66;\r\n    }\r\n    25%, 75% {\r\n       border-color: #eee;\r\n    }\r\n}\r\n\r\n.flash {\r\n-webkit-animation-name: flash;\r\n        animation-name: flash;\r\n}\r\n\r\n.image-preview {\r\n    position: absolute;\r\n    float: left;\r\n    background-size: contain;\r\n    height: 169px;\r\n    width: 300px;\r\n    overflow: hidden;\r\n    background-repeat: no-repeat;\r\n    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);\r\n}\r\n\r\n.thumb-preview {\r\n    position: absolute;\r\n    float: left;\r\n    background-size: contain;\r\n    height: 85px;\r\n    width: 85px;\r\n    overflow: hidden;\r\n    background-repeat: no-repeat;\r\n    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);\r\n}\r\n\r\n.image-preview-name {\r\n    font-style: italic;\r\n    color: #d7d7d7;\r\n}\r\n\r\n.upload-input {\r\n    /*position: absolute;*/\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    /*background: radial-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));*/\r\n    /*background-color: rgba(255, 255, 255, 0.55);*/\r\n}\r\n\r\n.upload-icon {\r\n    width: 100%;\r\n    height: 80px;\r\n    fill: #777;\r\n    display: block;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.upload-icon-thumb {\r\n    width: 100%;\r\n    height: 40px;\r\n    fill: #777;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.upload-label {\r\n    max-width: 80%;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    font-size: 125%;\r\n    height: 100%;\r\n    padding: 20px 0;\r\n}\r\n\r\n.upload-label-thumb {\r\n    max-width: 80%;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    font-size: 125%;\r\n    height: 100%;\r\n    padding: 5px 0;\r\n}\r\n\r\n.upload-label:hover strong, .upload-label-thumb:hover strong {\r\n    color: #999;\r\n}\r\n\r\nlabel {\r\n    font-weight: normal;\r\n}\r\n\r\n.upload-remove {\r\n    float: left;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: rgba(255, 0, 0, 0.9);\r\n    border: 0px solid transparent;\r\n    font-size: 200%;\r\n    color: #fff;\r\n    position: absolute;\r\n    left: 5px;\r\n    top: 5px;\r\n    outline: none;\r\n    /*box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.125);*/\r\n    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);\r\n}\r\n\r\n.gallery-embed-link {\r\n    margin: 10px 0;\r\n    padding: 5px;\r\n    background-color: #fafafa;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    border-radius: 4px;\r\n    /*resize: none;*/\r\n    min-width: 50%;\r\n}\r\n\r\n.info-label {\r\n    float: left;\r\n}\r\n\r\n.info-button {\r\n    float: right;\r\n    cursor: pointer;\r\n    outline: none;\r\n}"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Galleriat</h2>\n\n<div class=\"row galleries-container\" *ngIf=\"galleries\">\n\t<button *ngFor=\"let gallery of galleries\" [routerLink]=\"['/galleryedit', gallery.gallery_id]\" class=\"col-lg-2 col-md-3 col-xs-10 galleries-thumb-btn\">\n\t\t<div class=\"galleries-btn-edit\">\n\t\t\t<div class=\"galleries-thumb-frame\">\n\n\t\t\t\t<div class=\"galleries-thumb\">\n\t\t\t\t\t<div *ngIf=\"gallery.thumb\">\n\t\t\t\t\t\t<div *ngFor=\"let customization of gallery.customizations\">\n\t\t\t\t\t\t\t<div *ngIf=\"customization.options[0].imagePath\" [ngStyle]=\"{'background-image': 'url(' + customization.options[0].imagePath + ')' }\" style=\"background-size:cover; background-repeat: no-repeat;\" class=\"galleries-thumb\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<svg *ngIf=\"!gallery.thumb\" class=\"icon  icon--camera\" viewBox=\"-250 0 1024 886\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t<path d=\"M526.76,131.045c-14.277-14.274-31.498-21.413-51.675-21.413h-63.953l-14.558-38.826 c-3.618-9.325-10.229-17.368-19.846-24.128c-9.613-6.757-19.462-10.138-29.551-10.138H200.996 c-10.088,0-19.939,3.381-29.552,10.138c-9.613,6.76-16.225,14.803-19.842,24.128l-14.56,38.826H73.089 c-20.179,0-37.401,7.139-51.678,21.413C7.137,145.32,0,162.544,0,182.721v255.813c0,20.178,7.137,37.404,21.411,51.675    c14.277,14.277,31.5,21.416,51.678,21.416h401.989c20.177,0,37.397-7.139,51.675-21.416 c14.273-14.271,21.412-31.497,21.412-51.675V182.721C548.169,162.544,541.03,145.32,526.76,131.045z M364.446,400.993 c-25.029,25.03-55.147,37.548-90.362,37.548s-65.331-12.518-90.362-37.548c-25.031-25.026-37.544-55.151-37.544-90.358 c0-35.218,12.517-65.333,37.544-90.364c25.028-25.031,55.148-37.544,90.362-37.544s65.333,12.516,90.362,37.544 c25.03,25.028,37.545,55.146,37.545,90.364C401.991,345.842,389.477,375.964,364.446,400.993z\"/>\n\t\t\t\t\t\t<path d=\"M274.084,228.403c-22.651,0-42.018,8.042-58.102,24.128c-16.084,16.084-24.126,35.448-24.126,58.104 c0,22.647,8.042,42.014,24.126,58.098c16.084,16.081,35.45,24.123,58.102,24.123c22.648,0,42.017-8.042,58.101-24.123 c16.084-16.084,24.127-35.45,24.127-58.098c0-22.655-8.043-42.019-24.127-58.104C316.102,236.446,296.732,228.403,274.084,228.403 z\"/>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"galleries-thumb-title\">{{gallery.header}}</div>\n\t\t</div>\n\t\t<button (click)=\"viewGallery(gallery.gallery_id)\" class=\"galleries-btn-view\">\n\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</button>\n\t<button (click)=\"newGallery()\" class=\"col-lg-2 col-md-3 col-xs-10 galleries-thumb-btn galleries-new\">\n\t\t<div class=\"galleries-thumb-frame\">\n\t\t\t<div class=\"galleries-thumb\" style=\"background-size:cover; background-repeat: no-repeat;\">\n\t\t\t\t<svg class=\"icon  icon--plus\" viewBox=\"0 0 10 10\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t    <path d=\"M4.5 1.5 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z\" />\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"galleries-thumb-title\"><strong>Lisää uusi</strong></div>\n\t</button>\n</div>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"gallery\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6 product-container\">\n\t\t\t<div class=\"product-display\">\n\t\t\t\t<div class=\"product-image-container\">\n\t\t\t\t\t<!-- Product images go here -->\n\t\t\t\t\t<div *ngFor=\"let customization of gallery.customizations;let i=index\" [ngStyle]=\"{'z-index': 1 + i}\" class=\"product-image\">\n\t\t\t\t\t\t<div *ngFor=\"let option of customization.options;let j=index\" [ngClass]=\"{'imageVisible': customization.selected.id == 'canvas-' + i + '-' + j, 'imageHidden': customization.selected.id != 'canvas-' + i + '-' + j}\" #productImage id=\"canvas-{{i}}-{{j}}\" class=\"product-image\" [ngStyle]=\"{'background-image': 'url(' + option.imagePath + ')'}\" style=\"background-size:contain; background-repeat: no-repeat;\" alt=\"Tuotekuva\"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!--<div *ngFor=\"let customization of gallery.customizations;let i=index\" #productImage id=\"canvas-{{i}}\" class=\"product-image\" [ngStyle]=\"{'background-image': 'url(' + customization.selected.image + ')'}\" style=\"background-size:contain; background-repeat: no-repeat;\" alt=\"Tuotekuva\"></div>-->\n\n\t\t\t\t\t<!--<div *ngFor=\"let customization of gallery.customizations; let i=index\" class=\"product-image\" [ngStyle]=\"{'background-image': 'url(' + customization.selected.image + ')'}\" style=\"background-size:contain; background-repeat: no-repeat;\" alt=\"Tuotekuva\"></div>-->\n\t\t\t\t</div>\n\t\t\t\t<p class=\"product-name\" id=\"product-name\">{{gallery.header}} </p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-6 product-container\">\n\t\t\t<!-- Generate options -->\n\t\t\t<div *ngFor=\"let customization of gallery.customizations; let i=index\" class=\"product-customization\">\n\t\t\t\t<p class=\"product-customization-title\">{{gallery.customizations[i].title}} </p>\n\t\t\t\t<p class=\"product-customization-subtitle\">{{gallery.customizations[i].selected.name}} </p>\n\t\t\t\t<div class=\"btn-group\" data-toggle=\"buttons\">\n\t\t\t\t\t<label *ngFor=\"let option of gallery.customizations[i].options; let j=index\" #thumb class=\"btn product-customization-btn col-md-2\" [ngClass]=\"{active: j == 0, nonactive: j != 0}\" (click)=\"changeCustomization($event ,{which: i, index: j})\">\n\t\t\t\t\t\t<div class=\"product-thumb-frame\">\n\t\t\t\t\t\t\t<div [ngStyle]=\"{'background-image': 'url(' + option.thumbPath + ')'}\" style=\"background-size: contain; background-repeat: no-repeat;\" class=\"product-thumb\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t    \t<input class=\"product-thumb-frame\" type=\"radio\" name=\"options\" id=\"option{{j}}\" autocomplete=\"off\" checked>\n\t\t\t  \t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<button *ngIf=\"!nav.hidden && isOwner\" [routerLink]=\"['/galleryedit', gallery.gallery_id]\" class=\"btn btn-secondary btn-gallery-edit\" style=\"margin-top: 20px;\">Muokkaa galleriaa</button>\n</div>"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n\t<div *ngIf=\"gallery\">\n\t\t<h2 class=\"page-header\">Galleria {{gallery.header}}</h2>\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>Gallerian otsikko</label>\n\t\t\t\t<input (input)=\"inputChanged()\" type=\"text\" [(ngModel)]=\"gallery.header\" name=\"gallery.title\" class=\"form-control custom-input\">\n\t\t\t</div>\n\t\t\t<div *ngFor=\"let customization of gallery.customizations; let i = index\" class=\"customization\">\n\t\t\t\t<div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>{{i+1}}. kustomoinnin otsikko</label>\n\t\t\t\t\t\t<input (input)=\"inputChanged()\" type=\"text\" [(ngModel)]=\"customization.title\" name=\"{{customization.title + i}}\" class=\"form-control custom-input\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div *ngFor=\"let option of customization.options; let j = index\" class=\"option\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>{{j+1}}. vaihtoehdon nimi</label>\n\t\t\t\t\t\t\t<input (input)=\"inputChanged()\" type=\"text\" [(ngModel)]=\"option.name\" name=\"{{option.name + i + j}}\" class=\"form-control custom-input\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label>kuva</label>\n\n\t\t\t\t\t\t\t<popover-content #image\n\t\t\t                \tplacement=\"left\"\n\t\t\t                \t[animation]=\"true\" \n\t\t\t                \t[closeOnClickOutside]=\"true\" >\n\t\t\t\t\t\t\t    Kuva näytetään gallerian otsikon yläpuolella. 16:9 kuvasuhteessa olevat kuvat toimivat parhaiten. Ensimmäinen kuva on alimpana ja sitä seuraavat kuvat ovat aina edellisen päällä. Maksimikoko on  {{this.uploadLimit}} MB.\n\t\t\t\t\t\t\t</popover-content>\n\n\t\t\t\t\t\t\t<div [popover]=\"image\" class=\"info-button\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div #imagePreview [ngClass]=\"{'upload-hascontent': option.imagePreview}\" (dragover)=\"dragStart($event, {which: i, index: j, type: 'image'})\" (drop)=\"dropFile($event, {which: i, index: j, type: 'image'})\" (dragenter)=\"dragStart($event, {which: i, index: j, type: 'image'})\" (dragleave)=\"dragStop($event, {which: i, index: j, type: 'image'})\" id=\"imagezone-{{i}}-{{j}}\" class=\"upload-container custom-input\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"option.imagePreview\" [ngStyle]=\"{'background-image': 'url(' + option.imagePreview + ')'}\" id=\"image-preview\" class=\"image-preview\"></div>\n\t\t\t\t\t\t\t\t<div class=\"upload-input\">\n\t\t\t\t\t\t\t\t\t<input (change)=\"changeImage($event, {which: i, index: j, type: 'image'})\" id=\"image-{{i}}-{{j}}\" name=\"myFile\" type=\"file\" accept=\"image/jpg, image/jpeg, image/png, image/gif\" class=\"btn-secondary form-control\" style=\"display: none\" tabindex=-1>\n\t\t\t\t\t\t\t\t\t<label *ngIf=\"!option.imagePreview\" #imageInput (keypress)=\"enterImage($event, {which: i, index: j, type:'image'})\" for=\"image-{{i}}-{{j}}\" class=\"upload-label\" tabindex=0 >\n\t\t\t\t\t\t\t\t\t\t<svg class=\"upload-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"43\" viewBox=\"0 0 50 43\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z\"></path>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<strong>Valitse kuva</strong>\n\t\t\t\t\t\t\t\t\t\t<span class=\"image-upload\"> tai raahaa se tänne</span>.\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<button *ngIf=\"option.imagePreview\" (click)=\"removeImage({which: i, index: j, type: 'image'})\" class=\"upload-remove\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div *ngIf=\"option.imagePreview\" class=\"image-preview-name\">{{option.imageName}}</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label class=\"info-label\">pikkukuva</label> \n\n\t\t\t\t\t\t\t<popover-content #thumb\n\t\t\t                \tplacement=\"left\"\n\t\t\t                \t[animation]=\"true\" \n\t\t\t                \t[closeOnClickOutside]=\"true\" >\n\t\t\t\t\t\t\t    Pikkukuva on valintanapeissa näytettävä kuva. 1:1 kuvasuhteessa olevat kuvat toimivat parhaiten pikkukuvina. Jos sitä ei ole määritetty, käytetään valinnan kuvaa. Maksimikoko on  {{this.uploadLimit}} MB.\n\t\t\t\t\t\t\t</popover-content>\n\t\t\t\t \n\t\t\t\t\t\t\t<div [popover]=\"thumb\" class=\"info-button\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div #thumbPreview [ngClass]=\"{'upload-hascontent': option.thumbPreview}\" (dragover)=\"dragStart($event, {which: i, index: j, type: 'thumb'})\" (drop)=\"dropFile($event, {which: i, index: j, type: 'thumb'})\" (dragenter)=\"dragStart($event, {which: i, index: j, type: 'thumb'})\" (dragleave)=\"dragStop($event, {which: i, index: j, type: 'thumb'})\" (dragend)=\"dragStop($event)\" id=\"thumbzone-{{i}}-{{j}}\" class=\"upload-container-thumb custom-input\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"option.thumbPreview\" [ngStyle]=\"{'background-image': 'url(' + option.thumbPreview + ')'}\" id=\"thumb-preview\" class=\"thumb-preview\"></div>\n\t\t\t\t\t\t\t\t<div class=\"upload-input\">\n\t\t\t\t\t\t\t\t\t<input (change)=\"changeImage($event, {which: i, index: j, type: 'thumb'})\" id=\"thumb-{{i}}-{{j}}\" name=\"myFile\" type=\"file\" accept=\"image/jpg, image/jpeg, image/png, image/gif\" class=\"btn-secondary form-control\" style=\"display: none\" tabindex=-1>\n\t\t\t\t\t\t\t\t\t<label *ngIf=\"!option.thumbPreview\" (keypress)=\"enterImage($event, {which: i, index: j, type:'image'})\"  for=\"thumb-{{i}}-{{j}}\" class=\"upload-label-thumb\" tabindex=0>\n\t\t\t\t\t\t\t\t\t\t<svg class=\"upload-icon-thumb\" xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"43\" viewBox=\"0 0 50 43\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z\"></path>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<strong>Valitse kuva</strong>\n\t\t\t\t\t\t\t\t\t\t<span class=\"image-upload\"> tai raahaa se tänne</span>.\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<button *ngIf=\"option.thumbPreview\" (click)=\"removeImage({which: i, index: j, type: 'thumb'})\" class=\"upload-remove\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div *ngIf=\"option.thumbPreview\" class=\"image-preview-name\">{{option.thumbName}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<button (click)=\"removeOption({which: i, index: j})\" class=\"btn btn-danger\">Poista vaihtoehto</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button (click)=\"addOption(i)\" class=\"btn btn-success\">Uusi vaihtoehto</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button (click)=\"removeCustomization(i)\" class=\"btn btn-danger\">Poista kustomointi</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group customization-btn\">\n\t\t\t\t<button (click)=\"addCustomization()\" class=\"btn btn-success\">Uusi kustomointi</button>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button [disabled]=\"saving || !changed\" (click)=\"initSaveGallery()\" class=\"btn btn-primary\">Tallenna galleria</button>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button (click)=\"initRemoveGallery()\" class=\"btn btn-danger\">Poista galleria</button>\n\t\t\t</div>\n\t\t</form>\n\n\t\t<div class=\"form-group\">\n\t\t\t<button (click)=\"exitGallery('gallery/' + gallery.gallery_id)\" class=\"btn btn-secondary\">Näytä galleria</button>\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<button (click)=\"embedLink()\" class=\"btn btn-secondary\">Linkki upotukseen</button>\n\t\t</div>\n\n\t\t<textarea [hidden]=\"!showLink\" id=\"embedlink\" class=\"gallery-embed-link\">&lt;iframe src=\"{{pathToGallery}}?hidenav=true\"&gt;&lt;/iframe&gt;</textarea>\n\t</div>\n\n\t<div *ngIf=\"!gallery\">Galleriaa ei voitu ladata :(</div>\n\n\t<button (click)=\"exitGallery('galleries')\" class=\"btn btn-secondary\">Palaa Gallerioihin</button>\n</div>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n\t<h1>Kustomaattori</h1>\n\t<p class=\"lead\">Tervetuloa kustomaattoriin</p>\n\t<div *ngIf=\"!authService.loggedIn()\">\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Rekisteröidy</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Kirjaudu</a>\n\t</div>\n\t<div *ngIf=\"authService.loggedIn()\">\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/galleries']\">Galleriat</a> <a class=\"btn btn-default\" [routerLink]=\"['/profile']\">Profiili</a>\n\t</div>\n</div>\n\n<!--<div class=\"row\">\n\t<div class=\"col-md-4\">\n\t\t<h3>Express Backend</h3>\n\t\t<p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n\t</div>\n\t<div class=\"col-md-4\">\n\t\t<h3>Angular-CLI</h3>\n\t\t<p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n\t</div>\n\t<div class=\"col-md-4\">\n\t\t<h3>JWT Tokens</h3>\n\t\t<p>Full featured authentication using  JSON web tokens. Login and store user data</p>\n\t</div>\n</div>-->"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Kirjautuminen</h2>\n<form (submit)=\"onLoginSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Käyttäjänimi</label>\n\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Salasana</label>\n\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Kirjaudu\">\n</form>\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"!nav.hidden\" class=\"navbar navbar-default\">\n\t<div class=\"container\">\n\t\t<a class=\"navbar-brand\" href=\"#\">Kustomaattori</a>\n\t\t<!--<button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t</button>-->\n\n\t\t<div class=\"collapse navbar-collapse\">\n\t\t<!--<ul class=\"nav navbar-nav navbar-left\">\n\t\t\t<li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n\t\t\t</li>\n\t    </ul>-->\n\n\t    <ul class=\"nav navbar-nav navbar-right\">\n\t    \t<li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/galleries']\">Galleriat</a>\n\t\t\t</li>\n\t\t\t<li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/profile']\">Profiili</a>\n\t\t\t</li>\n\n\n\t\t\t<li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/login']\">Kirjaudu</a>\n\t\t\t</li>\n\t\t\t<li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/register']\">Rekisteröidy</a>\n\t\t\t</li>\n\t\t\t<li *ngIf=\"authService.loggedIn()\" class=\"nav-item\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Ulos</a></li>\n\t    </ul>\n\t\t</div>\n\t</div>\n</nav>"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">{{user.name}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\">Username: {{user.username}}</li>\n\t\t<li class=\"list-group-item\">Email: {{user.email}}</li>\n\t</ul>\n</div>\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Username</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(400);


/***/ })

},[744]);
//# sourceMappingURL=main.bundle.map