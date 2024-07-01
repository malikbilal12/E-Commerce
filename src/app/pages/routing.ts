import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home-comp-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./shop/shop.module').then((m) => m.ShopPageModule),
  },
  {
    path: 'bag',
    loadChildren: () =>
      import('./bag/bag.module').then((m) => m.BagPageModule),
  },
  {
    path: 'fav',
    loadChildren: () =>
      import('./favorites/favorites.module').then((m) => m.FavPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
