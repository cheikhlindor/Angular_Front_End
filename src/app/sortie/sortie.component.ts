import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sortie } from '../interfaces/sortie';
import { ServicesortieService } from '../services/service-sortie.service';
import { map } from 'rxjs/operators';
import { SearchData } from '../interfaces/search-data';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sortie',
  templateUrl: './sortie.component.html',
  styleUrls: ['./sortie.component.css']
})
export class SortieComponent implements OnInit, OnDestroy {

  sorties: Sortie[] = [];
  sortieForm!: FormGroup;
  Subscription: Subscription = new Subscription;
  @Input()
  searchdata!: SearchData;
  @Input()
  id!: number;
  constructor(private formbuilder: FormBuilder,public servicerest: ServicesortieService, private router: Router) { }
  
  ngOnDestroy(): void {
   this.Subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.sortieForm = this.formbuilder.group({nom: ['', ], campus: ['', ],datedebut: ['', ], datefin: ['', ], user: ['', ]});
    this.getSorties();
  }
  getSorties() {
   this.Subscription = this.servicerest.getSorties(this.sortieForm.value)
   //   .pipe(map((resp: { json: () => any; }) => resp.json()))
     .subscribe((resp) => {
      this.sorties = resp;
   })
  }
  add()
  {
    this.router.navigate(['/sortie-add'])
  }
  delete(id: number)
  {
    this.servicerest.deleteSortie(id).subscribe(() => {
      this.getSorties();
    }, (err) => {
      console.log(console.error);
    })

  }
  onSubmit() {
  
   this.servicerest.getSorties(this.sortieForm.value).subscribe((result) => {
     this.router.navigate(['/accueil']);
   }, (err) => {
     console.log(err);
   })
    }

}
