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
  selector: 'clienteedit',
  templateUrl: './clienteedit.component.html'
})

export class ClienteEditComponent{
  url: string = "https://systemedbar.site/"
  cli_id: number
  cli_nit: string
  cli_nombre: string
  cli_telefono: string
  cli_email: string
  cli_imagen: string
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
              console.log(localStorage.getItem('access_token'))
             this.infoUser(id).subscribe(
               response => {
                 this.cli_id=response.result.cliente.cli_id;
                 this.cli_nit=response.result.cliente.cli_nit;
                 this.cli_nombre=response.result.cliente.cli_nombre;
                 this.cli_telefono=response.result.cliente.cli_telefono;
                 this.cli_email=response.result.cliente.cli_email;
                 this.cli_imagen=response.result.cliente.cli_imagen;
                 console.log(response)
               },
               error => console.log(error)
             );
      }else{
        this.router.navigate(['login'])
      }
    }

  actualizar(form: ClienteI, id: number){
      this.updateCliente(form, id).subscribe(
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
  infoUser(id: number):Observable<ResponseI>{
    console.log(id);
    let options = this.createRequestOptions();
    let dir = this.url + "api/clientes/edit/"+id
    console.log(dir)
    return this.http.get<ResponseI>(dir, {headers: options})
  }
  updateCliente(form: ClienteI, id: number):Observable<ResponseI>{
    console.log(id);
    console.log(form)
    let options = this.createRequestOptions();
    let dir = this.url + "api/clientes/update/"+id
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
