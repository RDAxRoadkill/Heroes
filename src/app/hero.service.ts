import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  // Works because of mock-data, would not work when getting data from database.
  getHeroes(): Observable<Hero[]> {
      // Todo: send the message _after_ fetching the heroes
      this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
      // Returns an Observable<Hero[]> that emits a single value, the array of heroes.
  }
}
