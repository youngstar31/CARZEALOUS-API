import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inventory',
    loadChildren: () => import('./pages/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'car-view/:id',
    loadChildren: () => import('./pages/car-view/car-view.module').then( m => m.CarViewPageModule)
  },
  {
    path: 'car-details/:id',
    loadChildren: () => import('./pages/car-details/car-details.module').then( m => m.CarDetailsPageModule)
  },
  {
    path: 'versuz',
    loadChildren: () => import('./pages/versuz/versuz.module').then( m => m.VersuzPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
