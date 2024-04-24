import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Iproducts } from '../models/producto.model';
import { UUID } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl:string=apiServer.serverUrl;


  constructor(private http:HttpClient) { 
  }

getAllproduct():Observable<Iproducts[]>{

  return this.http.get<Iproducts[]>(`${this.apiUrl}`)
}


}








