import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'home',component:HomeComponent},
      {path:'skills',component:SkillsComponent},
      {path:'contact',component:ContactComponent},
      {path:'**',redirectTo:'home'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorfolioRoutingModule { }
