import { Injectable } from '@angular/core'
import { LoginI } from '../models/login.interface'
import { RegisterI } from '../models/register.interface'
import { ResponseI } from '../models/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Http, knownFolders, path, File, ImageSource, HttpResponse } from "@nativescript/core";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url: string = "https://systemedbar.site/"
  constructor(private http:HttpClient) {}
  private createRequestOptions() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ localStorage.getItem("access_token")
    });
    return headers;
  }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let dir = this.url + "api/login"
    return this.http.post<ResponseI>(dir, form)
  }
  registerByEmail(form:RegisterI):Observable<ResponseI>{
    let dir = this.url + "api/register "
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
