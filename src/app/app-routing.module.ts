import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'porfolio',
    loadChildren:()=>import('./porfolio/porfolio.module').then(m=>m.PorfolioModule)
  },
  {
    path: '**',
    redirectTo:'porfolio'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
