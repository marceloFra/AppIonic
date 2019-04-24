import { Login } from './../clases/login';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Jwt } from '../clases/jwt';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  token: Jwt;
  llave: String;
  user: string;
  password: string;
  // tslint:disable-next-line:max-line-length
  constructor(  private gestorLogin: LoginService, public navCtrl: NavController, public alertController: AlertController, public  storage: Storage ) { }

  ngOnInit() {
  }
  async Mensaje(cabezera: string, subtitle: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: cabezera,
      subHeader: subtitle,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }



  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }


  async login() {
    const {user, password} = this;
    try {

       if (user === null || user === '') {
         await this.Mensaje('Alerta', 'Mensaje', 'Ingrese su Usuario');
        }
        if (password === null || password === '') {
          await  this.Mensaje('Alerta', 'Mensaje', 'Ingrese su Contraseña');
        }
        if (user != null && password != null) {

            if (user === 'admin' && password === '123') {
              this.navCtrl.navigateRoot('/layout');
            }
        }

    } catch (err) {
        console.dir(err);
    }
  }

  Ingresar() {
    const login = new Login();
    login.Email = this.user;
    login.Password = this.password;

    this.gestorLogin.Autenticate(login).then(resp => {
      this.token = resp;
     // this.storage.set('token', this.token.token);
       const llave = this.token.token;
       localStorage.setItem('token', llave.toString() );
    //  this.llave =  this.token.token;
     // console.log('token Marcel' + localStorage.getItem('token'));
      if (llave !== null) {

        this.navCtrl.navigateRoot('/layout');
      }
    });
  }

/*
  Login() {
    const {user, password} = this;
    try {

      if (user === null || user === ' ') {
        this.presentAlert('ingrese el user');
       }
       if (password === null || password === '') {
        this.presentAlert('ingrese el password');
       }
      if (user === 'admin' && password === '123') {
        this.presentAlert('correcto');
      }
    } catch (err) {
        console.dir(err);
    }
  }

*/



}
