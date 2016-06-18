import { Component, provide, OnInit }  from '@angular/core';
import { Router }                      from '@angular/router-deprecated';
import { Hero }                from '../classes/hero';
import { HeroDetailComponent } from './HeroDetailComponent';
import { HeroService }         from '../services/hero-service';



@Component({
	selector: 'my-heroes',
	directives: [HeroDetailComponent],
	templateUrl: '/templates/heroes.component.html',
	styleUrls: ['css/heroes.component.css']
})
export class HeroesComponent implements OnInit{

	title: string = "Heroes";
    selectedHero: Hero;
    addingHero = false;
	public heroes: Hero[];
	error: any;
	
	constructor(private heroService: HeroService, private router: Router){

	}

	ngOnInit(){
		this.getHeroes();
	}

	onSelect(hero: Hero){
		this.selectedHero = hero;
	}

	getHeroes(){
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	addHero(){
		this.addingHero = true;
		this.selectedHero = null;
	}

	close(savedHero: Hero){
		this.addingHero = false;
		if(savedHero) { this.getHeroes() }
	}

	delete(hero: Hero, event: any){
		event.stopPropagation();
		this.heroService
			.delete(hero)
			.then(res => {
				this.heroes = this.heroes.filter(h => h !== hero);
				if (this.selectedHero === hero) { this.selectedHero = null }
			})
			.catch(error => this.error = error);
	}

	gotoDetail(){
		let link = ['HeroDetail', { id: this.selectedHero.id }];
		this.router.navigate(link);
	}
    logout() {
		console.log("logout...");
	}
}



