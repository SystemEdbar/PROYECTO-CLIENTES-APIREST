import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Item } from './item'


@Injectable({
  providedIn: 'root',
})
export class ItemService {

    constructor(private http: HttpClient){

    }
  getItems(): Observable<any> {
    return this.http.get("https://proyecto-desweb.herokuapp.com/api/clientes");
  }
//     getItems(): Observable<any> {
//       return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY");
//     }
}
