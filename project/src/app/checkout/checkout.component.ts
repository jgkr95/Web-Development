import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { PRODUCTS } from '../catalog';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  ca = [];
  p = PRODUCTS;
  total : number = 0;

  constructor(public service:ShoppingService) { }

  ngOnInit() {
    this.ca=this.service.getCartItems();  
    for(var i = 0; i<this.ca.length; i++) {
      this.total += this.p[this.ca[i].ind].price * this.ca[i].qty;      
    }

  }
 

}
