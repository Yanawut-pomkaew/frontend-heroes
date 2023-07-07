import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MyHeroComponent } from './my-hero/my-hero.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';

const appRoute: Routes = [
  {path : 'dashboard' , component : DashboardComponent},
  {path : 'heroes' , component : MyHeroComponent},
  {path : 'detail/:id' , component: DetailComponent},
  {path : 'create', component:CreateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyHeroComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
