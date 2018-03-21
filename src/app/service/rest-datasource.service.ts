import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Product} from "../model/Product.model";
import {Http, Request, RequestMethod} from "@angular/http";
import {Order} from "../model/Order.model";
import {Response} from "@angular/http/src/static_response";


  /*
  *   DataSource that gets its data from Restful web service which is created json-serer
  *   When define urlSegment make sure that the segment end with '/'
  */

  /*  json-server config info */
const PROTOCOL: string = "http";
const PORT: string = "3000";

@Injectable()
export class RestDatasource{
  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]>{
    return this.sendRequest(RequestMethod.Get,'products/');
  }

  saveOrder(order: Order): Observable<Order>{
    return this.sendRequest(RequestMethod.Post,'orders/',order);
  }

  private sendRequest(method: RequestMethod, urlSegment: string, body?: any)
    : Observable<any>
  {
    /*
      Creates `Request` instances from provided values.
        method: RequestMethod;
        headers: Headers;
        url: string;
        private contentType;
        responseType: ResponseContentType;
    */
    let request: Request = new Request({
      method: method,
      url: this.baseUrl + urlSegment,
      body: body
    });
    //request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>;
    return this.http.request(request).map((res: Response)=>res.json());
  }
}
