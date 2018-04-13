import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Listed Hero');
    return of(HEROES);
  }  

  getHero(id: number):Observable<Hero>{
    this.messageService.add(`Fetched hero = ${id} `);
    return of(HEROES.find(hero => hero.id == id));
  }

  addHero(hero: Hero):Observable<Hero>{
    this.messageService.add(`Inserted hero--${hero.id}--`);
    return of(hero);
  } 
  
  deleteHero(id: number):Observable<Hero[]>{
    for(let i = 0;i<HEROES.length;i++) { 
      if(HEROES[i]["id"] == id)
      {
        HEROES.splice(i,1);
      }
   }    
    this.messageService.add(`Deleted hero--${id}--`);
    return of(HEROES);
  }
  
}
