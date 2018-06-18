webpackJsonp([1],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';


var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(http, afauth /*private db: AngularFireDatabase,*/) {
        var _this = this;
        this.http = http;
        this.afauth = afauth; /*private db: AngularFireDatabase,*/
        this.ack = false;
        this.authState = null;
        this.afauth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
        console.log('Hello FirebaseServiceProvider Provider');
    }
    FirebaseServiceProvider.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afauth.auth.signInWithEmailAndPassword(user.email, user.password).then(function () {
                            _this.ack = true;
                        }).catch(function () {
                            _this.ack = false;
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, this.ack];
                }
            });
        });
    };
    FirebaseServiceProvider.prototype.SendPasswordResetLink = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afauth.auth.sendPasswordResetEmail(email).then(function () {
                            _this.ack = true;
                        }).catch(function () {
                            _this.ack = false;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.ack];
                }
            });
        });
    };
    Object.defineProperty(FirebaseServiceProvider.prototype, "authenticated", {
        ///////////////////////////////
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseServiceProvider.prototype, "currentUser", {
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseServiceProvider.prototype, "currentUserObservable", {
        // Returns
        get: function () {
            return this.afauth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseServiceProvider.prototype, "currentUserId", {
        // Returns current user UID
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseServiceProvider.prototype, "currentUserAnonymous", {
        // Anonymous User
        get: function () {
            return this.authenticated ? this.authState.isAnonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseServiceProvider.prototype, "currentUserDisplayName", {
        // Returns current user display name or Guest
        get: function () {
            if (!this.authState) {
                return 'Guest';
            }
            else if (this.currentUserAnonymous) {
                return 'Anonymous';
            }
            else {
                return this.authState['displayName'] || 'User without a Name';
            }
        },
        enumerable: true,
        configurable: true
    });
    //// Social Auth ////
    FirebaseServiceProvider.prototype.githubLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GithubAuthProvider();
        return this.socialSignIn(provider);
    };
    FirebaseServiceProvider.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider();
        return this.socialSignIn(provider);
    };
    FirebaseServiceProvider.prototype.facebookLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].FacebookAuthProvider();
        return this.socialSignIn(provider);
    };
    FirebaseServiceProvider.prototype.twitterLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].TwitterAuthProvider();
        return this.socialSignIn(provider);
    };
    FirebaseServiceProvider.prototype.socialSignIn = function (provider) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afauth.auth.signInWithRedirect(provider)
                            .then(function (credential) {
                            _this.authState = credential.user;
                            return true;
                            //  this.updateUserData()
                        })
                            .catch(function (error) { return console.log(error); })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //// Anonymous Auth ////
    FirebaseServiceProvider.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afauth.auth.signInAnonymously()
            .then(function (user) {
            _this.authState = user;
            // this.updateUserData()
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Email/Password Auth ////
    FirebaseServiceProvider.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afauth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            //this.updateUserData()
        })
            .catch(function (error) { return console.log(error); });
    };
    FirebaseServiceProvider.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afauth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            //this.updateUserData()
        })
            .catch(function (error) { return console.log(error); });
    };
    // Sends email allowing user to reset password
    FirebaseServiceProvider.prototype.resetPassword = function (email) {
        var auth = __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]();
        return auth.sendPasswordResetEmail(email)
            .then(function () { return console.log("email sent"); })
            .catch(function (error) { return console.log(error); });
    };
    //// Sign Out ////
    FirebaseServiceProvider.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afauth.auth.signOut().then(function (data) {
                            return data = true;
                        }).catch(function (data) { return data = false; })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] /*private db: AngularFireDatabase,*/])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myservices_MessageService__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(msg, afauth, navCtrl, navParams) {
        this.msg = msg;
        this.afauth = afauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    RegisterPage.prototype.goforSignIn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.signup = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function () {
                                _this.afauth.auth.currentUser.updateProfile({
                                    displayName: user.name,
                                    photoURL: "test.jpg"
                                });
                                _this.afauth.auth.currentUser.sendEmailVerification();
                                _this.msg.showToast("You are registered successfully!!!");
                            }).catch(function () {
                                _this.msg.popUp("Error!", "Please enter a valid email address");
                            })];
                    case 1:
                        result = _a.sent();
                        user.name = '';
                        user.password = '';
                        user.email = '';
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.blankField = function () {
        this.msg.blackFieldError();
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\Ashish\FunnyMeemes\FunnyMeemes\src\pages\register\register.html"*/'\n <ion-content class="back-ground">\n\n    <h1>\n        Funny Meemes\n      </h1>\n\n <ion-card id="card1">\n      <ion-card-header>\n       SIGN UP\n      </ion-card-header>\n      <ion-card-content>\n\n          <ion-list no-lines>\n\n              <ion-item>\n                  <ion-label floating color="labelcol">Name</ion-label>\n                  <ion-input type="text" [(ngModel)]="user.name" name="name" required></ion-input>\n                </ion-item>\n              <ion-item>\n                  <ion-label floating color="labelcol">Email</ion-label>\n                  <ion-input type="email" [(ngModel)]="user.email" name="email" required></ion-input>\n                </ion-item>\n                <ion-item>\n                <ion-label floating color="labelcol">Password</ion-label>\n                  <ion-input type="password" [(ngModel)]="user.password" name="password" required></ion-input>\n                </ion-item>\n                <div no-padding class="button-style bgg" *ngIf="user.email && user.password">\n                <button ion-button color="danger" block outline large round (click)="signup(user)">Sign Up</button>\n                </div>\n                <div no-padding class="button-style bgg" *ngIf="!user.email || !user.password">\n                    <button ion-button color="danger" class="no-bottom-margin top-margin-8 button-lfg" block outline large round (click)="blankField()" id="loginbutt">Sign Up</button>\n                    </div>\n\n          </ion-list>\n         <!-- <div class="item-center button-style"> -->  \n            <ion-grid>\n              <ion-row>\n                <ion-col col-8 style="padding: 20px 0px 0px 0px" >\n                    <span  style="font-size: 15px;color: rgb(10, 63, 209)"> Already have an account?</span>\n                </ion-col>\n                  <ion-col col-2 no-padding text-start>\n                      <button  ion-button color="secondary" clear large  (click)="goforSignIn()" icon-left icon-only><ion-icon no-padding name="log-in"></ion-icon></button>\n                  </ion-col>\n                </ion-row>\n            </ion-grid>\n     <!--   </div>  -->\n          </ion-card-content>\n</ion-card>\n\n</ion-content>\n<!--\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Welcome to Funny Meemes</ion-title>\n    <ion-buttons style="background:#5ceebd;font-size: 20px;font-weight: bolder" end>\n        Sign In\n        <button clear  style="background:#5ceebd;font-size: 20px;font-weight: bolder" (click)="goforSignIn()">\n             <ion-icon  name="arrow-dropright-circle"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="back-ground">\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label floating>Full Name</ion-label>\n            <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n          </ion-item>\n\n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n      \n      </ion-list>\n          \n          <div padding *ngIf="user.email && user.name && user.password">\n            <button ion-button class="font-15" block color="secondary" (click)="signup(user)">Sign Up</button>\n          </div>\n\n          <div class="item-center no-uppercase" padding *ngIf="!user.email || !user.name || !user.password">\n              <button ion-button class="font-20"  clear color="danger" (click)="blankField()"><u>Sign Up Now</u></button>\n            </div>\n\n  \n\n</ion-content>\n\n-->\n'/*ion-inline-end:"D:\Ashish\FunnyMeemes\FunnyMeemes\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__myservices_MessageService__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

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

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/register/register.module": [
		712,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myservices_MessageService__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_firebase_service_firebase_service__ = __webpack_require__(121);
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
    function HomePage(fireService, menuCtrl, navCtrl, afauth, msg, alertCtrl) {
        this.fireService = fireService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.afauth = afauth;
        this.msg = msg;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.items = [
            'Games',
            'FIFA',
            'Avengers',
            'Indian TV Shows',
            'Bollywood',
            'Hollywood',
            'South Indian Movies',
            'Phones',
            'Kids'
        ];
    }
    HomePage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    HomePage.prototype.gotologin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Good Bye',
            message: 'See you again ' + this.afauth.auth.currentUser.displayName + '.',
            buttons: [
                {
                    text: 'logout',
                    handler: function () {
                        _this.fireService.signOut().then(function (data) {
                            if (data) {
                                console.log(data);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                            }
                        }).catch(function (error) {
                            _this.msg.popUp('error', error);
                        });
                    }
                },
                {
                    text: 'wait',
                    handler: function () {
                        _this.msg.showToast("logout request cancelled");
                    }
                }
            ]
        });
        confirm.present();
        // 
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var local_user = this.afauth.auth.currentUser;
        this.user.name = local_user.displayName;
        if (local_user.emailVerified) {
            this.msg.popUp('Great!!!', "Thanks for the registration " + local_user.displayName + ", you are now a verified user");
        }
        else {
            this.afauth.auth.currentUser.sendEmailVerification();
            this.msg.popUp('Email Not Verified', "Thanks for the registration " + local_user.displayName + ", please verify your account through the link we have sent on your email");
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Ashish\FunnyMeemes\FunnyMeemes\src\pages\home\home.html"*/'<ion-menu side="right" [content]="content">\n\n    <ion-content padding class="back-ground">\n            <ion-list>\n              <ion-item menuClose detail-none>Close Menu</ion-item>\n              <ion-item  detail-none (click)="logout()">logout</ion-item>\n            </ion-list>\n    </ion-content>\n    \n    </ion-menu>\n<ion-nav #content></ion-nav>\n\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Welcome {{user.name}}\n    </ion-title>\n    <ion-buttons style="background:#f53d3d;font-size: 20px;font-weight: bolder;color:black" end>\n        <button ion-button menuToggle>\n      <!--  <button clear  style="background:#f53d3d;font-size: 20px;font-weight: bolder" (click)="logout()"> \n            <ion-icon name="log-out"></ion-icon> -->\n            <ion-icon name="settings"></ion-icon>\n          </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="back-ground" padding>\n\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\Ashish\FunnyMeemes\FunnyMeemes\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__myservices_MessageService__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_firebase_config__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__myservices_MessageService__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_firebase_service_firebase_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database_deprecated__ = __webpack_require__(707);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database_deprecated__["a" /* AngularFireDatabaseModule */],
                //AngularFireDatabase,
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__app_app_firebase_config__["a" /* firebase_config */]),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__myservices_MessageService__["a" /* MessageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(78);
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
    function MyApp(/*private afauth:AngularFireAuth,*/ platform, statusBar, splashScreen /*,private msg:MessageService,public alertCtrl:AlertController*/) {
        // @ViewChild(Nav) nav: Nav;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Ashish\FunnyMeemes\FunnyMeemes\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Ashish\FunnyMeemes\FunnyMeemes\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] /*,private msg:MessageService,public alertCtrl:AlertController*/])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebase_config; });
var firebase_config = {
    apiKey: "AIzaSyBYTNkS3FonBB_frGPK-2ak1TXZ22-bN48",
    authDomain: "funnymeemes-199b8.firebaseapp.com",
    databaseURL: "https://funnymeemes-199b8.firebaseio.com",
    projectId: "funnymeemes-199b8",
    storageBucket: "",
    messagingSenderId: "873402085100"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myservices_MessageService__ = __webpack_require__(88);
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
    function LoginPage(fireService, msg, navCtrl, navParams, alertCtrl) {
        this.fireService = fireService;
        this.msg = msg;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.ack = false;
    }
    LoginPage.prototype.goforlogin = function (user) {
        var _this = this;
        this.fireService.login(user).then(function (data) {
            if (data) {
                _this.msg.showToast("Successfully Logged In");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            }
        }).catch(function (error) {
            _this.msg.popUp("login error!", error);
            _this.user.email = '';
            _this.user.password = '';
        });
    };
    LoginPage.prototype.logme = function () {
        console.log("YESSS");
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Password',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'enter your email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        _this.msg.showToast("change password request cancelled.");
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        _this.fireService.SendPasswordResetLink(data.email).then(function (result) {
                            if (result) {
                                _this.msg.showToast("Reset password link has been sent on your email address");
                            }
                            else {
                                _this.msg.popUp("error", "entered email address is not registered");
                                console.log(result);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.blankField = function () {
        this.msg.blackFieldError();
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.googleLogin = function () {
        this.fireService.googleLogin();
    };
    LoginPage.prototype.facebookLogin = function () {
        this.fireService.facebookLogin();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        //this.popUp("Congratulations!!!","You are on the login page");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Ashish\FunnyMeemes\FunnyMeemes\src\pages\login\login.html"*/'<ion-content class="back-ground">\n\n  <h1>\n    Funny Meemes\n  </h1>\n\n\n  <ion-card id="card1">\n    <ion-card-header>\n      LOGIN\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-list no-lines>\n        <ion-item>\n          <ion-label floating color="labelcol">Email</ion-label>\n          <ion-input type="email" [(ngModel)]="user.email" name="email" required></ion-input>\n        </ion-item>\n        <ion-item>\n        <ion-label floating color="labelcol">Password</ion-label>\n          <ion-input type="password" [(ngModel)]="user.password" name="password" required></ion-input>\n        </ion-item>\n        <div no-padding class="button-style bgg" *ngIf="user.email && user.password">\n        <button ion-button  class="button-lfg" block outline large round  (click)="goforlogin(user)" ><ion-icon name="mail"></ion-icon>Login</button>\n        </div>\n        <div no-padding class="button-style bgg" *ngIf="!user.email || !user.password">\n            <button ion-button class="button-lfg" icon-left  block outline large round (click)="blankField()" ><ion-icon name="mail"></ion-icon>Login</button>\n            </div>\n            <div class="button-style font-size-15" no-padding>\n                <ion-grid no-padding class="no-item-margin" >\n                  <ion-row >\n                      <ion-col style="padding: 7px 0px 0px 0px" text-end>\n                          <span  style="font-size: 12px;color: rgb(245, 12, 12)">forgot password?</span>\n                      </ion-col>\n                        <ion-col  no-padding text-start>\n                            <button  ion-button color="goodblue" clear small style="font-size: 12px" (click)="forgotPass()" icon-only><u>Get Here</u></button>\n                        </ion-col>\n                  <!--  <ion-col no-padding>\n                      <button class="no-item-margin" style="font-size: 16px"  ion-button color="danger" id="forgetbutt" clear small item-start (click)="forgotPass()"><u>forgot password?</u></button></ion-col>\n                  --> </ion-row>\n                      <ion-row>\n                      <ion-col  no-padding>\n                      <button class="no-item-margin newuser-font" small style="font-size: 15px"  ion-button color="goodblue" icon-right clear id="newubutt"  (click)="register()"><u>New User?</u><ion-icon style="padding: 0px 0px 0px 5px"  name="person-add"><u></u></ion-icon></button></ion-col>\n                    </ion-row>\n                </ion-grid>\n                  </div>\n      </ion-list>\n      <b>OR</b> \n      <button class="button-lfg" ion-button full large round ion-left color="primary" icon-left (click)="facebookLogin()" >\n        <ion-icon name="logo-facebook"></ion-icon>\n        <div id="div1">Login with Facebook</div>\n      </button>\n      <button class="button-lfg" ion-button large full round ion-left color="danger" icon-left (click)="googleLogin()" >\n          <ion-icon name="logo-google"></ion-icon>\n          <div id="div1">Login with Google</div>\n        </button>   \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n\n\n\n\n\n<!--<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Welcome to Funny Meemes</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      \n       \n            <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input type="text" [(ngModel)]="user.email" name="email" required></ion-input>\n              </ion-item>\n            \n              <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input type="password" [(ngModel)]="user.password" name="password" required></ion-input>\n              </ion-item>\n\n              <div padding *ngIf="user.email && user.password">\n                  <button class="font-15 font-bold"   ion-button block (click)="goforlogin(user)">Submit</button>\n                </div>\n    \n                <div padding class="item-center" *ngIf="!user.email || !user.password">\n                  <button class="font-20 no-uppercase font-bold" color="danger" ion-button clear (click)="blankField()"><u>Submit Now</u></button>\n                </div>\n                <div class="button-style margin-div font-size-15" no-padding>\n                <ion-grid >\n                  <ion-row>\n                    <ion-col no-padding>\n                      <button class="button-style" clear small item-start ion-button color="danger" (click)="forgotPass()"><u>forgot password?</u></button></ion-col>\n                    <ion-col no-padding text-end>\n                      <button class="button-style" clear small  item-end ion-button color="secondary" (click)="register()" ><u>New User?</u></button></ion-col>\n                    </ion-row>\n                </ion-grid>\n                  </div>\n\n\n                  <div class="item-center margin-top-bot">\n                      <button class="loginBtn loginBtn--google" (click)="googleLogin()">Login with Google</button>\n                  </div>\n  \n                <div class="item-center margin-top-bot">\n                <button class="loginBtn loginBtn--facebook" (click)="facebookLogin()">Login with Facebook</button>\n                </div>\n\n                \n              \n</ion-content>\n\n-->'/*ion-inline-end:"D:\Ashish\FunnyMeemes\FunnyMeemes\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__myservices_MessageService__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(toastCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    MessageService.prototype.showToast = function (meg1) {
        var toast = this.toastCtrl.create({
            message: meg1,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    MessageService.prototype.popUp = function (mes1, mes2) {
        var alert = this.alertCtrl.create({
            title: mes1,
            subTitle: mes2,
            buttons: ['OK']
        });
        alert.present();
    };
    MessageService.prototype.blackFieldError = function () {
        this.showToast('all fields must be field');
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=MessageService.js.map

/***/ })

},[366]);
//# sourceMappingURL=main.js.map