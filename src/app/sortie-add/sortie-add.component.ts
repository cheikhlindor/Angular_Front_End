import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchData } from '../interfaces/search-data';
import { Sortie } from '../interfaces/sortie';
import { ServicesortieService } from '../services/service-sortie.service';

@Component({
  selector: 'app-sortie-add',
  templateUrl: './sortie-add.component.html',
  styleUrls: ['./sortie-add.component.css']
})
export class SortieAddComponent implements OnInit {

  sortieForm= new FormGroup({
    dateHeureDebut : new FormControl(''),
    nom : new FormControl(''),
    duree : new FormControl(''),
    dateLimiteInscription : new FormControl(''),
    nbInscriptionMax : new FormControl(''),
    infoSortie : new FormControl(''),
    etatsortie : new FormGroup({ libelle : new FormControl('')}),
    campus : new FormGroup({nom : new FormControl('')}),
    lieu : new FormGroup({nom : new FormControl(''),
    rue : new FormControl(''),
    latitude : new FormControl(''),
    longitude : new FormControl(''),
    ville: new FormGroup({nom : new FormControl(''),
    codePostal : new FormControl('')})
  })
  });
  subscription: Subscription = new Subscription;
  sorties: Sortie[] = [];
  searchdata!: SearchData;
  /*@Input() sortie = {nom: '',dateHeureDebut:'', duree:'', dateLimiteInscription:'',nbInscriptionMax:'',infoSortie:''
  ,etatsortie:'',campus:'',lieu:''};*/
  constructor(private formbuilder: FormBuilder, private router: Router, private sortieservice: ServicesortieService) { }

  ngOnInit(): void {
    /*this.sortieForm = this.formbuilder.group({dateHeureDebut: ['', Validators.required], nom: ['', Validators.required], duree: ['', Validators.required],
    dateLimiteInscription: ['', Validators.required], nbInscriptionMax: ['', Validators.required], infoSortie: ['', Validators.required], etatsortie: ['', Validators.required],
    campus: ['', Validators.required],  ville: ['', Validators.required]})*/

  }
  onSubmitForm() {
    this.subscription = this.sortieservice.addSortie(this.sortieForm.value).subscribe((result)=>{
      this.router.navigate(['/sortie-details/'+result.id]);

} ,(err) => {
console.log(console.error);
})

this.sortieForm.reset();
   
  }
}
