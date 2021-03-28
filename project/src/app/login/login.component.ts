import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:ShoppingService, public route:ActivatedRoute,public router:Router) { }
  email;
  password;
  login;
  username;
  // currentusername;
  // currentemail;
  // currentphone;

  ngOnInit() {
    
  }
  log;
  checklogin() {
    this.login = {email:this.email,password:this.password};
    this.service.checkuser(this.login).subscribe(x=>{this.log=x;
      // if(this.log.check!=1) {
      //   alert("Incorrect Details");
      // }
      if(this.log.check==1) {
        // this.username=this.log.username;
        console.log(this.log.user.username);
        var user={user:this.log.user.username,email:this.log.user.email,phone:this.log.user.phone};
        this.service.currentuser(user);
        this.go();
      }
    });
    
  }
  // this.service.currentuser()
  go(){
    console.log("Going")
    this.service.savecrede(this.email);
    // alert("dgvjhba");
    this.router.navigate(['/'],{relativeTo:this.route});
  }
}
