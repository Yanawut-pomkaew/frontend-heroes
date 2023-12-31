import { Component,  OnInit} from '@angular/core';
import {HeroesService} from '../../shared/heroes.service';
import { Heroes } from 'src/models/Heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  heroesSection:Heroes[] = [];

  constructor(private HeroesService : HeroesService) {}

  ngOnInit():void {
    this.HeroesService.getAllHeroes().subscribe( response => {
      this.heroesSection = response;
      
    })
 
  }

  
  
}
