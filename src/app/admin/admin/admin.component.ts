import { Component, } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

  /*
    The component is main container for Admin Feature
    It contains several child components which provide admin features.
    The component can clear auth_token and only be accessed by the auth_token
  */

@Component({
  moduleId: module.id,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {

  constructor(private authService: AuthService,
              private router: Router) {
    //For testing, in production, the code should be deleted
    this.authService.authenticate('admin','secret').subscribe(result => {
      console.log(authService.authenticated == true);
    });

  }

  logout() {
    this.authService.clear();
    //console.log(this.authService.authenticated);
    this.router.navigate(['/']);
  }
}
