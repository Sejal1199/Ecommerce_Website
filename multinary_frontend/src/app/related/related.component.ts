import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category.model';
import { Product } from '../product.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent implements OnInit {
  id: number;
  products: any;
  category : any;
  
  constructor( private route: ActivatedRoute,
    private  router: Router,private http:HttpClient) { }
    
    
  ngOnInit(): void {

    let id3 = this.route.snapshot.paramMap.get('id');

    

      this.http.get("http://localhost:3006/api/product/category/"+id3)
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

           
    })).subscribe(posts =>{
        console.log("array "+posts);
        //this.category = category;
       this.products = posts;
     })
   

  
    ;

  }

}
