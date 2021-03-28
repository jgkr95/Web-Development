import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { PRODUCTS } from './catalog';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
  p=PRODUCTS;
activateform:boolean=false;
newtitle:string;
newdescription:string;
newquantity:string;
cart=[];
add(){
  alert("added to cart");
}


  constructor(public service:ShoppingService) { }

  ngOnInit() {
  }

addcart(i) {
  var obj={ind:i, qty:1};
  this.service.addToCart(obj);
  alert("added to cart!!");
}

}



