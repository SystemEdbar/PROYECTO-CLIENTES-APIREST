import {Component, OnInit} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService} from '../service/login.service'
import { LoginI} from '../models/login.interface'
@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private api:LoginService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
                email: new FormControl('',[Validators.required]),
                password: new FormControl('', [Validators.required,Validators.minLength(6)]),
            });
  }
  onGetPacient(){
    this.api.getPacient().subscribe(
       response => {
         console.log(response)
       },
       error => console.log(error)
     );
  }
  onLogin(form:LoginI){
    console.log(JSON.stringify(form))
    this.api.loginByEmail(form).subscribe(
       response => {
         console.log(response)
       },
       error => console.log(error)
     );

   }
}
