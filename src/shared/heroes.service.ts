import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroes } from 'src/models/Heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  Heroes: Heroes[] = [];

  constructor(private http : HttpClient) { }

  getAllHeroes() {
    this.http.get<Heroes[]>('/api/hero-section').subscribe( response => {
      this.Heroes = response;
    })

    return this.Heroes;
  }

  
}
