import { User } from "../model/user";
import { DUser } from "../dto/duser";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Role} from '../../app/model/role';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

     private users: FirebaseListObservable<User[]>;
     private roles: FirebaseListObservable<Role[]>;

    constructor(private afAuth: AngularFireAuth, private afd: AngularFireDatabase) {}

    // credentials signIn (need work)
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

    // first get the info from the account then check from the "user(email)=> if true then check active or not,"
    // TODO: if false then add the "user(email, password) => both fb and gmail user are (role: user)"
    // TODO: only the registor user with the web page it have option of Role('user', 'admin')
    public signInFb(): firebase.Promise<any> {
        console.log("LOG With FB");
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
    
    public signInGoogle(): firebase.Promise<any> {
        console.log("LOG WITH GOOGLE");
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
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

    public logout(): void {
        this.afAuth.auth.signOut();
    }

    public onAuthSateChange(): any{
        this.afAuth.auth.onAuthStateChanged( firebaseUser => {
            if(firebaseUser) {
                console.log("USER LOGIN");
                return firebaseUser;
            } else{
                console.log("USER NOT LOGIN");
                return null;    
            }
        });

    }
    // get user detail gy email
    public getUserDetail(email: string): any{
        if(this.isActiveUser()) {
            return;
        }
        return;
    }
    // save user
    public saveUserDetail(): any{
        return null;
    }

    public updateuser(): any {
        return null;
    }

    public removeuser(): any {
        return;
      }

    public isActiveUser(): boolean {
        return false;
    }

    public getRole(): any{
        return this.roles = this.afd.list('/roles');;
    }

    public saveRole(role: Role): any{
        // save the role
    }

    public removeRole(): any{}
    
}