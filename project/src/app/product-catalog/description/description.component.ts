import { Component, OnInit, Input } from '@angular/core';
import { PRODUCTS } from '../catalog';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from '../../shopping.service';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit{
  i:number;
  p = PRODUCTS;
  iCart;
  comment;
  star;
  constructor(private route:ActivatedRoute,public service:ShoppingService) {
    
   }
  pi = PRODUCTS;
  feed;
   ngOnInit() {
    this.i = +this.route.snapshot.paramMap.get('id');
    this.service.getComments(this.i).subscribe(x=>{this.feed=x;
      // for(var j=0;j<this.feed.length;j++) {

      // }
    });
    
    // this.addcart(this.i);
   }

   addcart(i) {
    var obj={ind:i, qty:1};
    this.service.addToCart(obj);
    alert("added to cart!!")
  }
  addfeed(i){
    var objFeed = { index: i, comment:this.comment, star: this.star}
    this.service.addFeddback(objFeed);
  }
  addStar(n){
    this.star=n;
  }


}
