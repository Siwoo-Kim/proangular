import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

/*  This component processes the authentication  */

@Component({
  moduleId: module.id,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent{
  username: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router) { }

  authenticate(form: NgForm){
    if(form.valid){
      this.router.navigate(['/admin','main']);
    }else{
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
