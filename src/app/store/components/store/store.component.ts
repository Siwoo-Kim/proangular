import { Component, OnInit } from '@angular/core';
import {ProductRepository} from "../../../service/product-repository.service";
import {Product} from "../../../model/Product.model";
import {Cart} from "../../../model/Cart.model";
import {Router} from "@angular/router";


 /*
    Main store feature bootstrap component.
    Showing a list(paged) of the products.
    Processing adding product to cart.
    Navigate to CartDetailComponent, AuthComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'store',
  templateUrl: './store.component.html',
})
export class StoreComponent {
  perPage: number = 4;
  currentPage: number = 1;
  selectedCategory: string;

  constructor(private productRepository: ProductRepository,
              public cart: Cart,
              public router: Router){
    // console.log(productRepository.getProducts());
  }

  get categories(): string[]{
    return this.productRepository.getCategories();
  }

  get products(){
    /*
      the index of array is current currentPage - 1 * per currentPage size
      If the perPage is 3 , 1 currentPage for index would be 0 and
      2 currentPage for index is 3 (2 - 1) * 3
      3 currentPage for index is 6 (3 - 1) * 3
    */
    let index = (this.currentPage - 1) * this.perPage;
    return this.productRepository
      .getProducts(this.selectedCategory)
      .slice(index,index+this.perPage);
  }

  onChangePage(page: number){
    this.currentPage = +page;
  }

  onChangePerPage(perPage: number){
    this.perPage = +perPage;
    //Synchronizing
    this.onChangePage(1);
  }

  onChangeCategory(category?: string) {
    this.selectedCategory = category;
  }

  get pageCount(): number {
    return Math.ceil(this.productRepository.getCountProducts() / this.perPage);
  }

  /*
    get pageNumber(): number[]{
      /!*
        TotalPage for specific perPage is  ceil( total count of content / specific perPage )
        not 0 reminder should be ceiling
      *!/
      let totalPage = Math.ceil(this.productRepository.getCountProducts() / this.perPage);

      /!*
        Array.fill(value,start,end)
        Returns the this object after filling the section identified
        by start and end with value
      *!/
      return Array(totalPage).fill(0)
        .map((value: number,index: number) => {
          return index + 1;
        });
    }
  */

  addProduct(product: Product){
    this.cart.addProduct(product,1);
    this.router.navigate(['cart'],);
  }
}
