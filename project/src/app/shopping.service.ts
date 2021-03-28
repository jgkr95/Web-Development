import { Injectable } from '@angular/core';
import { Products } from './products';
import { PRODUCTS } from './catalog';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent} from './checkout/checkout.component';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(public obj:HttpClient) {
   }

pro = PRODUCTS;
create:any;
log:any;
feed;
// data = {user:"tarun",pass:"Hello"};
adduser(data) {
  // alert("hekko");
  // console.log(data);
  this.obj.post("http://127.0.0.1:4000/register", data).subscribe(x=>{this.create=x; console.log(this.create)});
}
checkuser(login) {
  // alert("hello");
  return this.obj.post("http://127.0.0.1:4000/login", login);
}
cart=[];
user;
addToCart(obj) {
// alert('Hai');
for(var i=0;i< this.cart.length;i++) {
  if(obj.ind===this.cart[i].ind) {
    this.cart[i].qty = this.cart[i].qty + obj.qty;
    // console.log(this.cart.length);
    return;
  }
}
  this.cart.push(obj);
  console.log(this.cart.length);
  // console.log(obj.ind);
  // console.log(this.cart[0].ind);
}
currentuser(user) {
this.user=user;
console.log(this.user);
console.log("--------------");
}
getCurrent() {
  console.log(this.user);
  return this.user;
}
getCartItems() {
  console.log(this.cart.length);
  return this.cart;
}
deleteFromCart(obj) {
  for(var i = 0;i < this.cart.length;i++) {
    if(obj.ind===this.cart[obj].ind) {
      this.cart.splice(i,1);
    }
  }
}
name
savecrede(email) {
  this.name = email
}
getComments(i) {
  let gg={"a":i}
  return this.obj.post("http://127.0.0.1:4000/description1",gg);
}
addFeddback(objFeed) {
  this.obj.post("http://127.0.0.1:4000/description", objFeed).subscribe(x=>{this.feed=x; console.log(this.feed)});

} 
getName() {
  return this.name;
}
}
