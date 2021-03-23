import { Campus } from "./campus";
import { User } from "./user";

export class SearchData {
  
     constructor(public nom: string, public campus: Campus, public  datedebut: Date, 
       public datefin: Date,   public  user: User ){

    }
}
