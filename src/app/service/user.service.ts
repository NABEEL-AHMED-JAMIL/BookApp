import { User } from "../model/user";
import { DUser } from "../dto/duser";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Role} from '../../app/model/role';


@Injectable()
export class UserService {

     private users: FirebaseListObservable<User[]>;
     private roles: FirebaseListObservable<Role[]>;

    constructor(private afAuth: AngularFireAuth, private afd: AngularFireDatabase) {}

    public login(dUser: DUser): any {
        console.log("get the roles");
        this.afAuth.auth.signInWithEmailAndPassword(dUser.email, dUser.password)
        .then(resolve => {
            console.log(resolve);

            return "OK";
        }).catch( reject => {
            return "Reject";
        });
    }
    
    public registor(user: User): any {
        this.users = this.afd.list('/users');
        this.users.push(user);
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
        return this.roles = this.afd.list('/roles');;
    }

    public saveRole(role: Role){
        // save the role
    }
}