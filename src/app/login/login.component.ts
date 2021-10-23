import {Component, OnInit} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService} from '../service/login.service'
import { LoginI} from '../models/login.interface'
import { ResponseI } from '../models/response.interface'
import * as dialogs from "@nativescript/core";
require( "nativescript-localstorage" );
@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup
  errorStatus:boolean = false
  errorMsg: any = ""
  constructor(private api:LoginService, private router: Router) {}

  ngOnInit(): void {
    this.checkLocalStorage()
    this.loginForm = new FormGroup({
        email: new FormControl('',[Validators.required]),
        password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });
  }
  checkLocalStorage(){
    if(localStorage.getItem('access_token')){
          this.router.navigate(['items'])
    }
  }
  onLogin(form:LoginI){
    console.log(JSON.stringify(form))
      this.api.loginByEmail(form).subscribe(response => {
        let data:ResponseI = response
        if(data.status == 'Okay'){
          localStorage.setItem("access_token",data.result.access_token)
          this.router.navigate(['items'])
        }else{
          this.errorStatus = true;
          this.showAlert();
        }
      }, error => console.log(error)
    );
  }
  showAlert(){
    dialogs.alert("¡El Correo o Contraseña son Incorrectos!")
    .then(() => {
        console.log("Dialog closed!");
    });
  }
}
