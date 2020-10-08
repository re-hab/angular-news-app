import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { Newsesolver } from './resolver/news.resolver';
import { NotFoundComponent } from '../app/components/not-found/not-found.component'

const routes: Routes = [

  {
    path: 'details',
    loadChildren:  () => import('./details/details.module').then(m => m.DetailsModule)

  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      news: Newsesolver
    },
  },

  {
    path: '**',
    component: NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
