import { AuthPage } from './../auth/auth.page';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient, public auth: AuthPage) { }

  listaProductos(): Promise<Producto[]> {
  // const llave = this.auth.llave;

   const llave = localStorage.getItem('token');
  // console.log( 'desde pro' + llave);
    const url = 'http://localhost:53277/api/producto';

    return new Promise((resolver, rechazar) => {
      return this.http.get(url, { headers: new HttpHeaders ({
        'Authorization': 'Bearer' + llave,
        'Content-Type': 'application/json'
      })
    })
      .pipe(map((res: any) => res))
      .subscribe(r => resolver(r), error => rechazar(error));
    });

  }


}
