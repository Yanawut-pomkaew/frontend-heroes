import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../shared/heroes.service';
import { Heroes } from 'src/models/Heroes';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.css']
})
export class MyHeroComponent implements OnInit {
  title = "My Heroes";

  heroesSection:Heroes[] = [];

  constructor(private HeroesService : HeroesService) {}

  ngOnInit():void {
    this.HeroesService.getAllHeroes().subscribe( response => {
      this.heroesSection = response;
      console.log(this.heroesSection);
    })


  }
}
