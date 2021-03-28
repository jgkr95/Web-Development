import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { PRODUCTS } from '../catalog';
import { containsTree } from '@angular/router/src/url_tree';
// import { Products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public service:ShoppingService) { 
    // console.log("hellooooooooo")

  }
  pr = PRODUCTS;
  c = 0;
 
  // prr = Products;
  ca=[];
  b: boolean = false;
  leng : Number = 0;
  
price:number;
pricee:number;
  
  value;
  numb = 1;
    ngOnInit() {
      
    //  console.log("hellooooooooo")
    this.ca=this.service.getCartItems();
    // this.leng = 1;
    this.leng = this.ca.length;
    // console.log(this.leng + "this isdfvbgnhj");
    if(this.leng == 0) {
      this.b = false;
   }
   else {
     this.b = true;
   }
   this.price = this.pricee;
   console.log(this.price);
  //  console.log(this.leng + "1");
 
  //   // alert(this.ca.length)
  //   console.log(this.pr);
  //   console.log(this.ca);
  }
deleteItem(i) {
  this.service.deleteFromCart(i);
  this.ca.splice(i, 1);
}
  
}
