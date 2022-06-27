import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-best-seller',
  templateUrl: './product-best-seller.component.html',
  styleUrls: ['./product-best-seller.component.css'],
  providers : [ProductService]
})
export class ProductBestSellerComponent implements OnInit {

  products: Product[];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    
  }

  addToCart(product:Product){};
}
