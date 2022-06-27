import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  path = "http://localhost:5064/products";

  constructor(private httpClient:HttpClient) { }

  getProductDetails(productId:number):Observable<Product>{
    let newPath = this.path;
    if(productId){
      newPath = newPath + "?productId=" + productId
    }

    return this.httpClient.get<Product>(newPath)
    .pipe(
      tap(data => console.log(JSON.stringify(data))), 
      catchError(this.handleError)
      );
  }


  getProductswithCategoryId(categoryId:string):Observable<Product[]>{
    let newPath = this.path;
    if(categoryId){
      newPath = newPath + "?categoryId=" + categoryId
    }

    return this.httpClient.get<Product[]>(newPath)
    .pipe(
      tap(data => console.log(JSON.stringify(data))), 
      catchError(this.handleError)
      );
  }

  handleError(err:HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = "Hata: " + err.message;
    }else{
      errorMessage = "Sistemsel Bir Hata !";
    }
    return throwError(() => errorMessage);
  }


  add(product:Product):Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type':"application/json",
        'Authorization' : "token"

      })
    };
    return this.httpClient.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))), 
      catchError(this.handleError)
      );
  }
}
