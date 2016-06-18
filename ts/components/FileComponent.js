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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var SourceFileComponent_1 = require('./SourceFileComponent');
var FileResultComponent_1 = require('./FileResultComponent');
var FileComponent = (function () {
    function FileComponent(routeParams) {
        this.routeParams = routeParams;
    }
    FileComponent.prototype.ngOnInit = function () {
        this.id = +this.routeParams.get('id');
    };
    FileComponent = __decorate([
        core_1.Component({
            selector: 'file',
            directives: [router_deprecated_1.RouterOutlet],
            template: "\n\t<h3> File number {{ id }} </h3>\n    <router-outlet></router-outlet>\n\n\t"
        }),
        router_deprecated_1.RouteConfig([
            { path: '/source', name: 'SourceFile', component: SourceFileComponent_1.SourceFileComponent, useAsDefault: true },
            { path: '/results', name: 'FileResult', component: FileResultComponent_1.FileResultComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
    ], FileComponent);
    return FileComponent;
}());
exports.FileComponent = FileComponent;
//# sourceMappingURL=FileComponent.js.map