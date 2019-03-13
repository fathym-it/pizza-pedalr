import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu';
import { HomeComponent } from './pages/home/home';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found';

const routes: Routes = [
  {
    path: ':location/menu',
    component: MenuComponent,
    data: {
      page: {
        Title: "Best Pizza in :location - Best Happy Hour :location - Pizza Pedal'r :location Menu",
        CSSClass: 'menu-:location',
        Description:
          "RIDE BIKES. EAT PIZZA. DRINK LOCAL. LIVE COLORADO.  Welcome to the Pedal'r, where all other pizza is downhill from here! all of our pizza - both slices and pies - are made to order.",
        Keywords: 'menu, pizza, :location, pizza peddler,best :location pizza'
      }
    }
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      page: {
        Title: "Best Pizza in Denver and Winter Park - Denver Happy Hour - Pizza Pedal'r",
        CSSClass: 'overview',
        Description:
          "RIDE BIKES. EAT PIZZA. DRINK LOCAL. LIVE COLORADO.  Welcome to the Pedal'r, where all other pizza is downhill from here! all of our pizza - both slices and pies - are made to order.",
        Keywords: 'pizza peddler,best denver pizza'
      }
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      page: {
        Title: "Pizza Page Not Found - Ooops - Pizza Pedal'r",
        CSSClass: 'overview',
        Description:
          "RIDE BIKES. EAT PIZZA. DRINK LOCAL. LIVE COLORADO.  Welcome to the Pedal'r, where all other pizza is downhill from here! all of our pizza - both slices and pies - are made to order.",
        Keywords: ''
      }
    }
  }
];

export let RoutingComponents: any[] = [MenuComponent, HomeComponent, PageNotFoundComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
