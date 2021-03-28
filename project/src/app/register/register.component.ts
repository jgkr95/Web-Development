import { Component, OnInit, Input } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:ShoppingService) { }
  username = "";
  // gender: string;
  email = "";
  phone = "";
  password = "";
  count = 0;
  data;
  ngOnInit() {
  }
  adduserr() {
    this.data = {username:this.username,email:this.email,phone:this.phone,password:this.password};
    console.log(this.data);
    this.service.adduser(this.data);
  }

}
