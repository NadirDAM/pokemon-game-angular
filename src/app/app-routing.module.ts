import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { IniciarSessioElHaidouriComponent } from './iniciar-sessio-el-haidouri/iniciar-sessio-el-haidouri.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'iniciar-sessio-el-haidouri',
    component: IniciarSessioElHaidouriComponent
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
  },
  {
    path: '**',
    redirectTo: 'iniciar-sessio-el-haidouri'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
