import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/shared/heroes.service';
import { Heroes } from 'src/models/Heroes';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  constructor(private heroService : HeroesService , private location : Location) {

  }

  ngOnInit() :void {}

  back() {
    this.location.back();
  }

  addHero(name : string) {
    
    this.heroService.addHero(name).subscribe(response => {
      console.log(response);
    })

    this.back();
  }

}
