import { Injectable } from '@angular/core'
import { LoginI} from '../models/login.interface'
import { PacientDetailI} from '../models/pacient-detail.interface'
import { ListPacientI} from '../models/list-pacient.interface'
import { ResponseI } from '../models/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Http, knownFolders, path, File, ImageSource, HttpResponse } from "@nativescript/core";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url: string = "https://curso-desweb.herokuapp.com/"
  constructor(private http:HttpClient) {}

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let dir = this.url + "api/login"
    return this.http.post<ResponseI>(dir, form)
  }
}
//   obtenerTodos(){
//       Http.request({
//         url: 'https://curso-desweb.herokuapp.com/api/infouser',
//         method: 'GET'
//       }).then(
//         (response: HttpResponse) => {
//           // Argument (response) is HttpResponse
//           console.log(`Response Status Code: ${response.statusCode}`)
//           console.log(`Response Headers: ${response.statusCode}`)
//           console.log(`Response Content: ${response.content}`)
//         },
//         e => {}
//       )
//   }
//   loginByEmail(form:LoginI){
//         token: string;
//         Http.request({
//           url: "https://curso-desweb.herokuapp.com/api/login",
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           content: JSON.stringify(form),
//         }).then(
//           (response: HttpResponse) => {
//             const result = response.content.toJSON();
//             console.log(`Response Status Code: ${response.statusCode}`)
//             console.log(`Response Headers: ${response.statusCode}`)
//             console.log(`Response Content: ${response.content}`)
//           },
//           (e) => {}
//         );
//   }
