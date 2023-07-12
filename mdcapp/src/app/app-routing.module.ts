import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuComponent } from './menu/menu.component';
import { CongeComponent } from './conge/conge.component';
import { OrdremComponent } from './ordrem/ordrem.component';
import { AutorisComponent } from './autoris/autoris.component';
import { DepurbainComponent } from './depurbain/depurbain.component';
import { RhMenuComponent } from './rh-menu/rh-menu.component';

import { TablistfComponent } from './tablistf/tablistf.component';



const routes: Routes = [
  {
    path:'',
  component:HomepageComponent
  
  },
  {path:'menu',component:MenuComponent},
  {path:'conge',component:CongeComponent},
  {path:'ordrem',component:OrdremComponent},
  {path:'autorisation',component:AutorisComponent},
  {path:'depurb',component:DepurbainComponent},

  {path:'tabl',component:TablistfComponent},
  {path:'menurh',component:RhMenuComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
