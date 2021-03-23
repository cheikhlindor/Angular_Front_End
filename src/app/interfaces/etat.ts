import { Sortie } from "./sortie";

export class Etat {
public id!: number;
public libelle: string;
public sorties: Sortie [];
    constructor( id: number,  libelle: string,  sorties: Sortie []){
        this.sorties = sorties;
        this.libelle = libelle;

    }
}
