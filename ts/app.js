"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./services/in-memory-data.service');
var core_1 = require('@angular/core');
var http_2 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require('@angular/router-deprecated');
var mrs_1 = require('./components/mrs');
var HomeComponent_1 = require('./components/HomeComponent');
var AboutComponent_1 = require('./components/AboutComponent');
var DetailsComponent_1 = require('./components/DetailsComponent');
var ProfileComponent_1 = require('./components/ProfileComponent');
var FilesComponent_1 = require('./components/FilesComponent');
var HeroesRoutingComponent_1 = require('./components/HeroesRoutingComponent');
var WlavApp = (function () {
    function WlavApp() {
    }
    WlavApp.prototype.logout = function () {
        console.log("logout...");
    };
    WlavApp = __decorate([
        core_1.Component({
            selector: 'wlav-app',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS],
            template: "\n\t<div>\n\t\t<nav>\n\t\t<a> Navigation </a>\n\t\t<ul>\t\n\t\t\t<li> <a [routerLink]=\"['/Home']\"> Home </a> </li>\n\t\t\t<li> <a [routerLink]=\"['/Files']\"> Files </a> </li>\n\t\t\t<li> <a [routerLink]=\"['/About']\"> About </a> </li>\n\t\t\t<li> <a [routerLink]=\"['/HeroesRouter']\"> Heroes </a> </li>\n\t\t</ul>\n\n\t\t<ul>\n\t\t\t<li> <a [routerLink]=\"['/Profile']\"> Profile </a> </li>\n\t\t\t<li> <button (click)=\"logout()\"> Logout </button> </li>\n\t\t</ul>\n\t</nav>\n\n\t\t<router-outlet></router-outlet>\n\t</div>\n\t \n\t"
        }),
        router_deprecated_1.RouteConfig([
            { path: '/home', name: 'Home', component: HomeComponent_1.HomeComponent, useAsDefault: true },
            { path: '/about', name: 'About', component: AboutComponent_1.AboutComponent },
            { path: '/profile', name: 'Profile', component: ProfileComponent_1.ProfileComponent },
            { path: '/files/...', name: 'Files', component: FilesComponent_1.FilesComponent },
            { path: '/mrs', name: 'Mrs', component: mrs_1.Mrs },
            { path: '/details/:id', name: 'Details', component: DetailsComponent_1.DetailsComponent },
            { path: '/heroes/...', name: 'HeroesRouter', component: HeroesRoutingComponent_1.HeroesRoutingComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], WlavApp);
    return WlavApp;
}());
exports.WlavApp = WlavApp;
platform_browser_dynamic_1.bootstrap(WlavApp, [
    http_2.HTTP_PROVIDERS,
    { provide: http_1.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
    { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService }
]);
//# sourceMappingURL=app.js.map