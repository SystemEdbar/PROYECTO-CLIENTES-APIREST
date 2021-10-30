import {Component, OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { ResponseI } from '../models/response.interface'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Http, knownFolders, path, File, ImageSource, HttpResponse } from "@nativescript/core";
require( "nativescript-localstorage" );
@Component({
  selector: 'clientecreate',
  templateUrl: './clientecreate.component.html'
})

export class ClienteCreateComponent{
  url: string = "https://systemedbar.site/"
  item: Object

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
  const id = +this.route.snapshot.params.id
      this.checkLocalStorage(id)
  }
  checkLocalStorage(id: number){
      if(localStorage.getItem('access_token')){
              console.log(localStorage.getItem('access_token'))
             this.infoUser(id).subscribe(
               response => {
                 this.item=response;
                 console.log(this.item)
               },
               error => console.log(error)
             );
      }else{
        this.router.navigate(['login'])
      }
    }

  infoUser(id: number):Observable<ResponseI>{
    console.log(id);
    let options = this.createRequestOptions();
    let dir = this.url + "api/clientes/edit/1"
    console.log(dir)
    return this.http.get<ResponseI>(dir, {headers: options})
  }

  private createRequestOptions() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ localStorage.getItem("access_token")
    });
    return headers;
  }
}
