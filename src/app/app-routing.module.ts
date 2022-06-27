import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/base/index/index.component';
import { ProductListComponent } from './views/pages/product/product-list/product-list.component';
import { ProductComponent } from './views/pages/product/product.component';


const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'products/category/:categoryId', component:ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
