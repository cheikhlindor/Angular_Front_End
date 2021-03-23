import { Sortie } from "./sortie";
import { Ville } from "./ville";

export class Lieu {
    public id!: number;
    public nom!:string;
    public rue!:string;
    public latitude!:number;
    public longitude!:number;
   
    ville!: Ville;
    constructor(nom:string, rue:string, latitude:number, logitude:number, ville: Ville){ }
}
