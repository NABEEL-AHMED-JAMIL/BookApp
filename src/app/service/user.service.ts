import { User } from "../model/user";
import { DUser } from "../dto/duser";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Role} from '../../app/model/role';


@Injectable()
export class UserService{

    private roles: Array<Role> = [ { id: 1, role: "ADMIN"}, { id: 1, role: "USER"}];

    constructor(private afAuth: AngularFireAuth) {}

    public login(dUser: DUser): any {
        this.afAuth.auth.signInWithEmailAndPassword(dUser.email, dUser.password)
        .then(resolve => {
            console.log(resolve);

            return "OK";
        }).catch( reject => {
            return "Reject";
        });
    }
    
    public registor(user: User): any {
       return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
       .then(resolve => {
           // if this isresolve
           this.saveUserDetail();
           return "OK";
       }).catch( reject => {
           return "Reject";
       });
    }

    public getUserDetail(): any{
        if(this.isActiveUser()) {
            return;
        }
        return;
    }

    public saveUserDetail(): any{
        return null;
    }

    public isActiveUser(): boolean {
        return false;
    }

    public getRole(): any{
        return null;
    }

    public saveRole(){
        // save the role
    }
}