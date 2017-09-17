import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistorPage } from '../registor/registor';
import { LoginPage } from '../login/login';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  public register(): any{
    this.navCtrl.push(RegistorPage);
  }

  public login(): any{
    this.navCtrl.push(LoginPage);
  }

  public listView(): any{
    this.navCtrl.push(MainPage);
  }

}
