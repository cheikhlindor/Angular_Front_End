import { Campus } from "./campus";
import { Etat } from "./etat";
import { Lieu } from "./lieu";
import { User } from "./user";
import { Ville } from "./ville";

export class Sortie {
    id!: number;
    nom: string;
    dateHeureDebut: any;
    duree!: number;
    dateLimiteInscription:any;
    nbInscriptionMax!: number;
    infoSortie!: string;
    etat!: string;
    etatsortie!: Etat;
    lieu!: Lieu;
    campus!: Campus;
    user!: User;
    users!: User[];
    ville!: Ville;
    isActive!: boolean;
    motif!: string;
    constructor(nom: string, dateHeureDebut:Date, duree:number,  dateLimiteInscription:any
        , infoSortie: string,  etatsortie: Etat, lieu: Lieu,   campus: Campus, user: User, 
         isActive: boolean = true, motif: string = 'null', ville: Ville){
        this.nom = nom;
        
    }
}
