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
  constructor(private api:LoginService, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
                email: new FormControl('',[<any>Validators.required]),
                password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(6)]),
            });
  }

  onLogin(form:LoginI){
    console.log(JSON.stringify(form))
    this.api.loginByEmail(form).subscribe(
           (data) => {
             console.log(data)
           },
          (error) => {
             console.log(error)
          }
     );
  }
}
