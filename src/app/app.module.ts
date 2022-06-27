import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexComponent } from './views/base/index/index.component';
import { FooterComponent } from './views/base/index/footer/footer.component';
import { NavbarComponent } from './views/base/index/navbar/navbar.component';
import { ProductComponent } from './views/pages/product/product.component';
import { ProductListComponent } from './views/pages/product/product-list/product-list.component';
import { ProductDetailComponent } from './views/pages/product/product-detail/product-detail.component';
import { HttpClientModule  } from '@angular/common/http';
import { ProductBestSellerComponent } from './views/pages/product/product-best-seller/product-best-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    IndexComponent,
    NavbarComponent,
    ProductDetailComponent,
    ProductBestSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
