import { Component } from '@angular/core';
import { Products } from './products';
import { PRODUCTS } from './catalog';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service : ShoppingService) {}
  title = 'Welcome';
  sea:string;
  b:boolean = false;
  p = PRODUCTS;
  j:number;
  i:number;
  name = this.service.getName();
  searchItem(das) {
    for(this.i = 0; this.i<this.p.length; this.i++) {
      if(this.sea == this.p[this.i].title) {
        this.b = true;
        this.j = this.i;
        console.log(this.p[this.i].title);
        console.log(das);
      }
    }
  }
}