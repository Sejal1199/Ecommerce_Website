import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Category } from '../category.model';
import { Userlogin } from '../userlogin.model';
import { throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import{User} from '../user.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = new BehaviorSubject<Userlogin>(null);
  //user:any;
  userID:any;
  username : string;
  session_set = true;
  constructor(private productServi :ProductServices,private http: HttpClient, private router: Router) { }

  


  category : Category[];
  ngOnInit(): void {

    this.userID =localStorage.getItem("user_id");
    console.log(this.userID);
    this.username = localStorage.getItem("user_name");
    console.log(this.username);
    this.session_set = true;

    
    
    
    this.http.get<{[key:string]:Product}>("http://localhost:3006/api/categories")
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        return postArray;

           
    })).subscribe(category =>{
        //console.log("category "+category);
        this.category = category;
       //this.products = posts;
     })
   
    ;

  }

  


  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
   
    localStorage.removeItem('userData');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');

    sessionStorage.removeItem('user_name');
    this.session_set = false;
  }

}
