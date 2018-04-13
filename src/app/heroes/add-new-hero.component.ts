import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-hero';


@Component({
  selector: 'app-add-new-hero', 
  templateUrl: './add-new-hero.component.html',
  styleUrls: ['../hero-detail/hero-detail.component.css']
})
export class AddNewHeroComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  addHero(name: string):void{
      let id = this.heroes.length + 1;
      if(!name) {return;}
      this.heroService.addHero( {name,id} as Hero).subscribe(hero => this.heroes.push(hero));
  }


}