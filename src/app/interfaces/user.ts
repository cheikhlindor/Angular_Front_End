import { Campus } from "./campus";
import { Sortie } from "./sortie";

export class User {
    public sorties!: Sortie[];
    
    public id!: number;
    private  activation_token!: string;
    private  reset_token!: string;
    constructor( public nom: string, public prenom: string, public username: string, public telephone: number, public password: string, public email: string
        , public sortie : Sortie, public campus: Campus){
           

    }
    
}
