import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;
  newuser!: User;
  constructor(private formbuilder: FormBuilder, private router: Router, private userservice: UserServiceService) { }

  ngOnInit(): void {
    this.userForm = this.formbuilder.group({prenom: ['', Validators.required], nom: ['', Validators.required], email: ['', Validators.required],
    telephone: ['', Validators.required], username: ['', Validators.required], campus: ['', Validators.required], password: ['', Validators.required],
    con_password: ['', Validators.required]})
  }

  onSubmitForm() {
    
  
       if( this.userForm.value.password ===  this.userForm.value.con_password){
       
      this.userservice.addUser(this.newuser) .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
      ;
      }

  }
}
