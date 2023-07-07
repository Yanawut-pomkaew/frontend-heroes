import { Component , OnInit} from '@angular/core';
import {HeroesService} from '../../shared/heroes.service';
import { Heroes } from 'src/models/Heroes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  private id?: string ;
  selectedHero:Heroes[]= [];
  private tempName!: string;

  constructor(private HeroesService : HeroesService, private route: ActivatedRoute , private location  : Location , private  router : Router) {}

  ngOnInit():void {
    this.getSelectedHero();
  }

  getSelectedHero() :void{
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.HeroesService.getHeroById(this.id).subscribe( response => {
      if(!response) {
        this.router.navigate(['/']);
      }
      this.selectedHero = response;
    });
  }

  back():void {
    this.location.back();
  }

  deleteHero() : void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.HeroesService.deleteHero(this.id).subscribe(response => {
      this.back();
    });
  }

  updateHero() : void {
    this.id = this.route.snapshot.paramMap.get('id')!;
   
    for(let i = 0; i < this.selectedHero.length ; ++i) {
      this.tempName = this.selectedHero[i].name;
    }

    if(this.selectedHero) {
      this.HeroesService.updateHero(this.tempName , this.id).subscribe( (response) => {console.log(response);this.back();})
    }
  }
}
