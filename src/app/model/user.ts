import { Role } from './role';

export class User{
    
    public id:Number;
    public name:String;
    public firstName: String;
    public lastName: String;
    public password:string;
    public email:string;
    public role: Role;
    public phone?: string;
    public active: boolean;
    
    constructor(){
        this.active = true;
        this.role = { id: 1, role: "USER"};
    }

}