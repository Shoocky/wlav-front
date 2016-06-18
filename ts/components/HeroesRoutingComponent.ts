import {Component} from '@angular/core';
import {HeroService} from '../services/hero-service';
import {Hero} from '../classes/hero';
import {HeroesComponent} from './HeroesComponent';
import {HeroDetailComponent} from './HeroDetailComponent';
import {DashboardComponent} from './DashboardComponent';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
	selector: 'hero-app',
	directives: [ROUTER_DIRECTIVES],
	providers: [HeroService],
	templateUrl: 'templates/heroes-routing.component.html',
	styleUrls: ['css/heroes-routing.component.css']

})
@RouteConfig([ 
		{ path: '/heroes',      name: 'Heroes',     component: HeroesComponent},
		{ path: '/dashboard',   name: 'Dashboard',  component: DashboardComponent, useAsDefault: true},
		{ path: '/details/:id', name: 'HeroDetail', component: HeroDetailComponent }
])
export class HeroesRoutingComponent{
	title = 'Tour of heroes';
}