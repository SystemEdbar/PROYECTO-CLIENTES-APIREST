import { Injectable } from '@angular/core'
import { LoginI} from '../models/login.interface'
import { ResponseI } from '../models/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url:string = "http://127.0.0.1:8000/"
  constructor(private http:HttpClient) {}

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let dir = this.url + "api/login"
    return this.http.post<ResponseI>(dir, form)
  }

}
