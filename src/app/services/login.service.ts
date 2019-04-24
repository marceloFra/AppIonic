import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Login } from '../clases/login';
import { Jwt } from '../clases/jwt';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,  public  storage: Storage ) { }

  Autenticate(login: Login): Promise<Jwt> {

    const url = 'http://localhost:53277/api/account/login';

    return new Promise((resolver, rechazar) => {

      return this.http.post(url, login).pipe(map(  (res: any)   => res))
      .subscribe((r) => resolver(r), error => rechazar(error));

    });
  }
}
