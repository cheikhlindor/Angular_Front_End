import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private auth: AuthService,
    private router: Router,
        private formBuilder: FormBuilder,
    private cookieService: CookieService) { 
    
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
  });
  }
  loginUser() {
    const credentials = this.loginForm.value;
    return this.auth.loginUser(credentials)
      .subscribe(
        res => {
          if (res.token) {
            
            localStorage.setItem('token', res.token);
            this.router.navigate(['/accueil']);
          }
          else{
            this.router.navigateByUrl('/login');
          }
        },
        err => console.log(err)
      );
  }

  getpassword() {
    return this.loginForm.get('password');
  }

  getusername() {
    return this.loginForm.get('username');
  }
}

