import { Sortie } from "./sortie";
import { User } from "./user";

export class Campus {

public id!: number;
public nom!:string;
public sorties!:Sortie [];
public users!: User [];
constructor(){}
}
