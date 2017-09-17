import { Role } from './role';

export class User{
    
    public id:number;
    public name:string;
    public firstName: string;
    public lastName: string;
    public email:string;
    public password:string;
    public phone?: string;
    public role: Role;
    public active: boolean;
    
    constructor(){}

}