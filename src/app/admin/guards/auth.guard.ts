import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "../../service/auth.service";
import {AuthComponent} from "../auth/auth.component";

  /*
    The guard prevents the unauthorized request for navigating to Admin Components.
    If auth_token is not provided, the host of request is will directed to AuthComponent
  */
@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService,
              private router: Router){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(/*route.component != AuthComponent && */!this.authService.authenticated){
      this.router.navigate(['/admin','auth']);
      return false;
    }
    return true;
  }

}
