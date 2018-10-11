import { Injectable } from '@angular/core';
import {Hero} from './heroes/hero';
import {HEROES} from './heroes/mock-heroes';
import {Observable, of} from 'rxjs';
import * as JQuery from 'jquery';
import {MessageService} from './messages/message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
