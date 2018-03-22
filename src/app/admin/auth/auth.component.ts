import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../service/auth.service";

  /*
    This component authenticate user which has valid id and password.
    Navigate to the AdminComponent which provides managing application feature
    related to business or StoreComponent
  */


@Component({
  moduleId: module.id,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  username: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  authenticate(form: NgForm){
    if(form.valid){
      this.authService.authenticate(this.username,this.password)
        .subscribe((result: boolean) => {
          if(result){
            this.router.navigate(['..','main'],{relativeTo: this.route});
          }else{
            this.errorMessage = 'Authentication Failed';
          }
        });
    }else{
      this.errorMessage = 'Form is not valid';
    }
  }

}
