import { Lieu } from "./lieu";

export class Ville {
public id!: number;
public nom!:string;
public codePostal!:number;
lieux!: Lieu [];
constructor(nom: string, codePostal:number, lieux: Lieu){}
}

