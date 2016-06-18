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
var http_1 = require('@angular/http');
var Mrs = (function () {
    function Mrs(http) {
        this.http = http;
        this.errData = "";
    }
    Mrs.prototype.makeGetRequest = function () {
        var _this = this;
        this.loading = true;
        this.errData = "";
        this.errorGet = false;
        this.http.request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe(function (res) {
            console.log("pa kreno si care");
            _this.data = res.json();
            _this.loading = false;
            _this.errorGet = false;
        }, function (err) {
            console.log('lalalla');
            _this.errData.toString();
            _this.errorGet = true;
            _this.loading = false;
        });
    };
    Mrs.prototype.makeHeaders = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('X-API-TOKEN', 'ng-book');
        var opts = new http_1.RequestOptions();
        opts.headers = headers;
        this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    /*
    makeHeaders(): void {
        let headers: Headers = new Headers();
        headers.append("X-API-TOKEN", "ng-book");
        let opts: RequestOptions = new RequestOptions();
          opts.headers = headers;
              this.http.get("http://jsonplaceholder.typicode.com/posts/1", opts)
              .subscribe((res: Response) => {
                 this.data = res.json();
                  });
  }
*/
    Mrs.prototype.makePostRequest = function () {
        var _this = this;
        this.sending = true;
        this.errorPost = false;
        this.errData = "";
        this.http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify({
            body: 'bar',
            title: 'foo',
            userId: '1'
        })).subscribe(function (res) {
            _this.data = res.json();
            _this.sending = false;
        }, function (err) {
            _this.errData.toString();
            _this.errorPost = true;
            _this.sending = false;
        });
    };
    Mrs = __decorate([
        core_1.Component({
            selector: 'mrs',
            template: "\n\t<h2> mrs </h2>\n\t<div>\n\t\t<button (click)=\"makeHeaders()\"> Make GET </button>\n\t\t<div *ngIf=\"loading\">loading...</div>\n\t\t<div *ngIf=\"errorGet\"> error with get </div>\n\t\t<pre> {{ data | json }} </pre>\n\n\t</div>\n\t<div>\n\t\t<button (click)=\"makePostRequest()\"> Make POST </button>\n\t\t<div *ngIf=\"sending\"> sending </div>\n\t\t<div *ngIf=\"errorPost\"> error with POST {{errData}} </div>\n\t\t<pre> {{postResponse | json }} </pre>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Mrs);
    return Mrs;
}());
exports.Mrs = Mrs;
//# sourceMappingURL=mrs.js.map