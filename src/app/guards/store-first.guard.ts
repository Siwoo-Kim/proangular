import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {StoreComponent} from "../store/components/store/store.component";

/*
  The guard to prevent navigate directly to other url but "/store" .
  The guard can be disabled in the development environment
*/
@Injectable()
export class StoreFirstGuard implements CanActivate{
    isFirstRoute: boolean = true;

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean {
      if(this.isFirstRoute){
        this.isFirstRoute = false;
        /*  Filtering current routing is not towarding 'store'  */
        if(route.component != StoreComponent){
          this.router.navigate(['store']);
          return false;
        }
      }
      return true;
    }


}
