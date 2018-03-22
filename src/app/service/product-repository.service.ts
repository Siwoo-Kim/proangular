import {Injectable} from "@angular/core";
import {MockDatasource} from "./mock-datasource.service";
import {Product} from "../model/Product.model";
import {RestDatasource} from "./rest-datasource.service";


  /*
  *   The service-api which provides Product Data from DataSource
  *   to components.
  */
@Injectable()
export class ProductRepository{
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: RestDatasource){
    this.dataSource.getProducts().subscribe((data:Product[]) => {
      this.products = data;
      this.categories = this.products
        .map((product:Product) => product.category )
        .filter((category:string, index: number, array:string[]) => {
          /*
            Array.indexOf(element)
            Returns the index of the first occurrence of a value in an array.
          */
          return array.indexOf(category) == index;
        })
        .sort();
    });
  }

  /*
    if category presents, filter the products
    otherwise return all of them
  */
  getProducts(category: string = null): Product[]{
    return this.products
      .filter(product => (!category) || product.category == category );
  }

  getProduct(id: number): Product{
    return this.products.find(product => product.id == id);
  }

  getCategories(): string[]{
    return this.categories;
  }

  getCountProducts(): number{
    return this.products.length;
  }

  saveProduct(product: Product){
    if( !(product.id) || product.id == 0 ){
      this.dataSource.saveProduct(product).subscribe((product: Product) => {
        this.products.push(product);
      })
    }else{
      this.dataSource.updateProduct(product).subscribe((product: Product) => {
        let index = this.products.findIndex(_product => _product.id == product.id );
        /*
            Array.splice(index,howMany,replaceElement)
            Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
         */
        this.products.splice(index,1,product);
      })
    }
  }

  deleteProduct(id: number){
    this.dataSource.deleteProduct(id).subscribe((product: Product) => {
      this.products.splice(this.products.findIndex(_product => _product.id == id),1);
    })
  }
}
