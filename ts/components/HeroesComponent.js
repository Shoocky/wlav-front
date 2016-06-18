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
var HeroDetailComponent_1 = require('./HeroDetailComponent');
var hero_service_1 = require('../services/hero-service');
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.title = "Heroes";
        this.addingHero = false;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.addHero = function () {
        this.addingHero = true;
        this.selectedHero = null;
    };
    HeroesComponent.prototype.close = function (savedHero) {
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    };
    HeroesComponent.prototype.delete = function (hero, event) {
        var _this = this;
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        var link = ['HeroDetail', { id: this.selectedHero.id }];
        this.router.navigate(link);
    };
    HeroesComponent.prototype.logout = function () {
        console.log("logout...");
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            directives: [HeroDetailComponent_1.HeroDetailComponent],
            templateUrl: '/templates/heroes.component.html',
            styleUrls: ['css/heroes.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_deprecated_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=HeroesComponent.js.map