import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sortie } from '../interfaces/sortie';
import { ServicesortieService } from '../services/service-sortie.service';

@Component({
  selector: 'app-sortie-detail',
  templateUrl: './sortie-detail.component.html',
  styleUrls: ['./sortie-detail.component.css']
})
export class SortieDetailComponent implements OnInit {

  sortie!: Sortie;
  constructor(public servicerest: ServicesortieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.getSortie(id);
  }
  getSortie(id: number){
  this.servicerest.getSortie(id).subscribe((sortie) => {this.sortie = sortie});
}

}
