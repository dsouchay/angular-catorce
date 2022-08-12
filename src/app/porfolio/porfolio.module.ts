import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { PorfolioRoutingModule } from './porfolio-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [
    HomeComponent,
    WorksComponent,
    SkillsComponent,
    ContactComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PorfolioRoutingModule,
    MatIconModule,
    MatListModule
  ],
  exports:[
    MenuComponent
  ]
})
export class PorfolioModule { }
