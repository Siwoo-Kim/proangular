import {Injectable} from "@angular/core";
import {RestDatasource} from "./rest-datasource.service";
import {Observable} from "rxjs/Observable";

  /*
    The service provides the mechanism to perform authentication
    determine whether the application has bean authenticated
    also clear the token which is received from json-server
  */

@Injectable()
export class AuthService{

  constructor(private dataSource: RestDatasource){ }

  authenticate(username: string, password: string):Observable<boolean> {
    return this.dataSource.authenticate(username,password);
  }

  get authenticated():boolean {
    return this.dataSource.auth_token != null;
  }

  clear(){
    this.dataSource.auth_token = null;
  }

}
