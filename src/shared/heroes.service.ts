import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from 'src/models/Heroes';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http : HttpClient) { }

  getAllHeroes() {
    return this.http.get<Heroes[]>('/api/hero-section');
  }

  getHeroById(id : string) : Observable<Heroes[]> {
    return this.http.get<Heroes[]>('/api/hero-section/'+id);
  }

  deleteHero(id : string) {
    
    return this.http.delete<Heroes[]>('/api/hero-section/'+id);
  }

  addHero(name : string) {
    
    return this.http.post<Heroes[]>('/api/hero-section/'+name , { title: 'POST more Hero' });
  }

  updateHero(selectedHero : string , id : string) {
    
    return this.http.put<Heroes[]>('/api/hero-section/'+id+'/'+selectedHero , { title: 'PUT detail specify Hero' });
  }

  
}
