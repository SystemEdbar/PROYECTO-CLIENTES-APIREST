import { Injectable } from '@angular/core'
import { LoginI} from '../models/login.interface'
import { PacientDetailI} from '../models/pacient-detail.interface'
import { ListPacientI} from '../models/list-pacient.interface'
import { ResponseI } from '../models/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url:string = "http://3.140.5.181/"
  constructor(private http:HttpClient) {}

  getPacient():Observable<PacientDetailI>{
    let dir = this.url + "pacientes?id=4"
    return this.http.get<PacientDetailI>(dir)
  }
  getListPacient():Observable<ListPacientI>{
      let dir = this.url + "pacientes?page=1"
      return this.http.get<ListPacientI>(dir)
    }
  loginByEmail(form:LoginI):Observable<ResponseI>{
    console.log(form)
    return this.http.post<ResponseI>("http://127.0.0.1:8000/api/login", form)
  }

}
