import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.auth.logout().subscribe(()=>{
      
    })
  }

}
