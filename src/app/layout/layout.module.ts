import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LayoutPage } from './layout.page';
import { FirstPage } from './first/first.page';
import { SecondPage } from './second/second.page';
import { ListProdPage } from './list-prod/list-prod.page';


const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      // tslint:disable-next-line:quotemark
      { path: '', redirectTo: 'first', pathMatch: 'full'  },
      { path: 'first', component: FirstPage },
      { path: 'second', component: SecondPage },
      { path: 'list-prod', component: ListProdPage },

    ]
  }

];

// list-prod
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LayoutPage,
    FirstPage,
    SecondPage,
    ListProdPage,
  ]
})
export class LayoutPageModule {}

