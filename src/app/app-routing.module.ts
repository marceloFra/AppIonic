import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutPageModule' },
  { path: 'list-prod', loadChildren: './layout/list-prod/list-prod.module#ListProdPageModule' },
  // { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' }
  /*
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },

  { path: 'first', loadChildren: './layout/first/first.module#FirstPageModule' },
  { path: 'second', loadChildren: './layout/second/second.module#SecondPageModule' },


  */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
