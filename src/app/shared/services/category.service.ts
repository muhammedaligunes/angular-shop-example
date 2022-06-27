import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  path = "http://localhost:5064/categories";

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<Category[]>{

    return this.httpClient.get<Category[]>(this.path)
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

}
