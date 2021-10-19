import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from "@nativescript/angular"
import { NativeScriptRouterModule } from '@nativescript/angular'
import {ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import 'nativescript-localstorage';

import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginService } from './service/login.service'
import { ResponseI } from './models/response.interface'
import { LoginI } from './models/login.interface'
import { Http, knownFolders, path, File, ImageSource, HttpResponse } from "@nativescript/core";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, ReactiveFormsModule, FormsModule, NativeScriptFormsModule, HttpClientModule],
  declarations: [AppComponent, routingComponents],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
