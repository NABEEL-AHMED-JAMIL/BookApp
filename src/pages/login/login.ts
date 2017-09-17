import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/service/user.service';
import { DUser } from '../../app/dto/duser';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private dUser: DUser;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {
    this.dUser = new DUser();
  }

  public login(): any{
    this.userService.login(this.dUser);
  }

}
