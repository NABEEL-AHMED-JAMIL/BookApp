import { Component  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../app/service/user.service';
import { User } from '../../app/model/user';
// import { Role} from '../../app/model/role';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-registor',
  templateUrl: 'registor.html',
})

export class RegistorPage {

  private user:User;
  private status: String;
  // private roles: Array<Role>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {
    this.user = new User();
    this.getRole();
  }
  public register(): any{
    console.log("Register......call");
    this.status = this.userService.registor(this.user);
    if(this.status == "OK"){
      this.navCtrl.push(LoginPage);
    }else {
      // show the error 
      this.user = new User();
    }
  }

  public getRole(): any {
     console.log(this.userService.getRole());
  }


}
