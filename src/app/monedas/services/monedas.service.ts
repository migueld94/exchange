import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {  Change, Moneda } from '../interface/monedas.interface';


@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  constructor(private http: HttpClient) { }

  getMonedas(): Observable<Moneda> {
    const myheader = new HttpHeaders({'Authorization' : 'Basic ZnJlZWxhbmNlcjc4Nzg5ODE4MDptMmlzYmlmcWw3N3JuM3Z0dDFtdjNucjAxMA=='});
    return this.http.get<Moneda>('https://xecdapi.xe.com/v1/currencies.json', { headers: myheader }).pipe(
      catchError((error) => {
        console.log('Error de conexion con el servicio',error)
        return throwError(error);
      })
    );
  }

  getChange(t1:string,t2:string,m:number): Observable<Change> {
    const myheader = new HttpHeaders({'Authorization' : 'Basic ZnJlZWxhbmNlcjc4Nzg5ODE4MDptMmlzYmlmcWw3N3JuM3Z0dDFtdjNucjAxMA=='});
    return this.http.get<Change>(`https://xecdapi.xe.com/v1/convert_from.json/?from=${ t1 }&to=${ t2 }&amount=${ m }`, { headers: myheader }).pipe(
      catchError((error) => {
        console.log('Error de conexion con el servicio',error)
        return throwError(error);
      })
    ); 
  }

  }
 