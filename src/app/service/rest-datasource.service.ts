import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Product} from "../model/Product.model";
import {Http, Request, RequestMethod} from "@angular/http";
import {Order} from "../model/Order.model";
import {Response} from "@angular/http/src/static_response";


  /*
  *   DataSource that gets its data from Restful web service which is created json-serer
  *   When define urlSegment make sure that the segment end with '/'
  *
  *   *revision 3_22
  *   The DataSource provides authentication via json-token (JWT).
  *   Once the token is received from the json-server by authenticating username and password (authenticate method),
  *   The datasource holds the token.
  *   After the process, request header will put attribute 'Authorization' with value of token
  *   for authentication.
  */

  /*  json-server config info */
const PROTOCOL: string = "http";
const PORT: string = "3000";

@Injectable()
export class RestDatasource{
  private baseUrl: string;
  auth_token: string;

  constructor(private http: Http) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.http.request(new Request({
        method: RequestMethod.Post,
        url: this.baseUrl + 'login',
        body: { name: username, password: password },
      })).map((res: Response) => {
        let result = res.json();
        console.log(result);
        this.auth_token = result.success ? result.token : null;
        return result.success;
      });
  }

  getProducts(): Observable<Product[]>{
    return this.sendRequest(RequestMethod.Get,'products/');
  }

  saveOrder(order: Order): Observable<Order>{
    return this.sendRequest(RequestMethod.Post,'orders/',order);
  }

  /*  Admin Feature */
  saveProduct(product: Product): Observable<Product> {
    return this.sendRequest(RequestMethod.Post,'products/',product, true);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.sendRequest(RequestMethod.Put,`products/${product.id}/`,product, true);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.sendRequest(RequestMethod.Delete,`products/${id}/`,null,true);
  }

  getOrders(): Observable<Order[]> {
    return this.sendRequest(RequestMethod.Get, 'orders/',null,true);
  }

  deleteOrder(id: number): Observable<Order> {
    return this.sendRequest(RequestMethod.Delete,`orders/${id}/`,null, true);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.sendRequest(RequestMethod.Put,`orders/${order.id}/`,order, true);
  }


  private sendRequest(method: RequestMethod, urlSegment: string, body?: any, auth: boolean = false)
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
    if(auth && this.auth_token){
      request.headers.set('Authorization',`Bearer<${this.auth_token}>`);
    }
    //request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>;
    return this.http.request(request).map((res: Response)=>res.json());
  }
}
