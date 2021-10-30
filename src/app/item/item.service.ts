import { Injectable } from '@angular/core'
import { Item } from './item'

import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Http, knownFolders, path, File, ImageSource, HttpResponse } from "@nativescript/core";
@Injectable({
  providedIn: 'root',
})
export class ItemService {

    constructor(private http: HttpClient){

    }
    private createRequestOptions() {
      let headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ localStorage.getItem("access_token")
      });
      return headers;
    }
    getItems(): Observable<any> {
      let options = this.createRequestOptions();
      return this.http.get("https://systemedbar.site/api/clientes/show", {headers: options});
    }
//     getItems(): Observable<any> {
//       return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY");
//     }
}
