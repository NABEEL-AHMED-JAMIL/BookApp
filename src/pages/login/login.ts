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

  // first get the info from the account then check from the "user(email)=> if true then check active or not,"
  // TODO: if false then add the "user(email, password) => both fb and gmail user are (role: user)"
  // TODO: only the registor user with the web page it have option of Role('user', 'admin')
  public loginFb(): any {
    console.log("LOG With FB");
    this.userService.signInFb().then(
      (SUCCESS) => { console.log(SUCCESS); } , 
      (ERROR) => { console.log(ERROR) });
   }
  
  public loginGoogle(): any {
    console.log("LOG WITH GOOGLE");
    this.userService.signInGoogle().then(
      (SUCCESS) => { console.log(SUCCESS); } , 
      (ERROR) => { console.log(ERROR) });
  }
}
