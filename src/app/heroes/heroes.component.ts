import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-heroes', 
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  deleteHero(id: number):void{
    this.heroService.deleteHero(id).subscribe(heroes => this.heroes);
  }

}
