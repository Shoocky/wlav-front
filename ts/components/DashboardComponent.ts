
import {Component, OnInit} from '@angular/core';
import {Router}      from '@angular/router-deprecated';
import {HeroService} from '../services/hero-service';
import {Hero} from '../classes/hero';


@Component({
	selector: 'my-dashboard',
	templateUrl: 'templates/dashboard.component.html',
	styleUrls: ['css/dashboard.component.css']

})
export class DashboardComponent{
	heroes: Hero[] = [];

	constructor(private heroService: HeroService, private router: Router){

	}

	ngOnInit(){
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(0, 5));
	}

	gotoDetail(hero: Hero){
		let link = ['HeroDetail', { id: hero.id }];
		this.router.navigate(link);
	}
}