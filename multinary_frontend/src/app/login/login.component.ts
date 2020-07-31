import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from '../product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { throwError, BehaviorSubject } from 'rxjs';
import { Userlogin } from '../userlogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  //user = new BehaviorSubject<Userlogin>(null);
  user:any;
  constructor( private route: ActivatedRoute,
    private router: Router,private http:HttpClient) { }

  ngOnInit() {

  }
  
  loginClicked(form:NgForm)
  {
    

    const email = form.value.email;
    const password = form.value.password;

    const login = { email :email,password:password};

    //alert(password);

    this.http.post('http://localhost:3006/api/signin',login).subscribe(responseData => {
      console.log(responseData);
      
   this.user=responseData;
   localStorage.setItem("user_id",this.user.user._id);
   console.log(localStorage.getItem("user_id"));
   localStorage.setItem("user_name",this.user.user.name);
   localStorage.setItem("user_email",this.user.user.email);


   sessionStorage.setItem("userID",this.user.user._id);
   sessionStorage.setItem("userData",this.user.user.name);
   console.log(this.user.user.name);
    //   if(responseData.user.name)
    // {
    //     this.handleAuthentication(responseData.user.email,responseData.user._id,responseData.user.name);
        
        this.router.navigate(['/main']);

      //}
    })
    form.reset();
  }

  private handleAuthentication(
    email: string,
    userId: string,
    name: string,
  ) 
  {
   
    const user = new Userlogin(email, userId, name);
    //this.user.next(user);

    localStorage.etItem('userData', JSON.stringify(user)); // option 1
    localStorage.setItem('user_email', email);  // option 2
    localStorage.setItem('user_name', name);  // option 3
    localStorage.setItem('user_id', userId);  // otpion 4
 
    sessionStorage.setItem('user_name', name);
  }

}



