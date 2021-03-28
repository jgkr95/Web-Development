import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: ShoppingService) { }
username;
phone;
email;
data;
  ngOnInit() {
    this.data=this.service.getCurrent();

    this.username=this.data.user;
    this.email=this.data.email;
    this.phone=this.data.phone;
    console.log(this.data.user);
  }

}
