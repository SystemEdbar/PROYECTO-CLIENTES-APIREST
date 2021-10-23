import {Component, OnInit} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService} from '../service/login.service'
import { RegisterI } from '../models/register.interface'
import { ResponseI } from '../models/response.interface'
import * as dialogs from "@nativescript/core";
require( "nativescript-localstorage" );
@Component({
  selector: 'usercreate',
  templateUrl: './usercreate.component.html'
})

export class UserCreateComponent{
  registerForm: FormGroup
  errorStatus:boolean = false
  errorMsg: any = ""
  constructor(private api:LoginService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
        name: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
        password: new FormControl('', [Validators.required]),
    });
  }
  onRegister(form:RegisterI){
      console.log(form)
      this.api.registerByEmail(form).subscribe(response => {
        let data:ResponseI = response
        console.log(data);
        if(data.status == 'Okay'){
          localStorage.setItem("access_token",data.result.access_token)
          this.router.navigate(['items'])
        }else{
          this.errorStatus = true;
          this.showAlert();
        }
      }, error => console.log(error));
  }
  showAlert(){
    dialogs.alert("¡Error al Registrarse!")
    .then(() => {
        console.log("Dialog closed!"); });
  }
}
