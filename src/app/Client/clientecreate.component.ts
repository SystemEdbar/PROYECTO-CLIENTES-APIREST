import {Component, OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { ClienteI } from '../models/cliente.interface'
import { ResponseI } from '../models/response.interface'
import { Observable } from 'rxjs'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Http, knownFolders, path, File, ImageSource, HttpResponse } from "@nativescript/core";
require( "nativescript-localstorage" );
@Component({
  selector: 'clientecreate',
  templateUrl: './clientecreate.component.html'
})

export class ClienteCreateComponent{
  url: string = "https://systemedbar.site/"
  clienteForm: FormGroup

  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
  const id = +this.route.snapshot.params.id
      this.checkLocalStorage(id)
      this.clienteForm = new FormGroup({
              cli_id: new FormControl('',[Validators.required]),
              cli_nit: new FormControl('',[Validators.required]),
              cli_nombre: new FormControl('',[Validators.required]),
              cli_telefono: new FormControl('',[Validators.required]),
              cli_email: new FormControl('',[Validators.required]),

          });
  }
  checkLocalStorage(id: number){
      if(localStorage.getItem('access_token')){

      }else{
        this.router.navigate(['login'])
      }
    }

  crear(form: ClienteI){
      this.createCliente(form).subscribe(
         response => {
            let data:ResponseI = response
            if(data.status == 'Okay'){
                this.router.navigate(['items'])
            }
           console.log(response)
         },
         error => console.log(error)
       );
  }
  createCliente(form: ClienteI):Observable<ResponseI>{
    console.log(form)
    let options = this.createRequestOptions();
    let dir = this.url + "api/clientes/create"
    console.log(dir)
    return this.http.post<ResponseI>(dir, form, {headers: options})
  }

  private createRequestOptions() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ localStorage.getItem("access_token")
    });
    return headers;
  }
}
