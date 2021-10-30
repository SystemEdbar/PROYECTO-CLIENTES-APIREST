import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { UserComponent } from './user/user.component'
import { UserCreateComponent } from './user/usercreate.component'
import { ClienteCreateComponent } from './Client/clientecreate.component'
import { ClienteEditComponent } from './Client/clienteedit.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'users', component: UserComponent},
  { path: 'user/create', component: UserCreateComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cliente/create', component: ClienteCreateComponent},
  { path: 'cliente/edit/:id', component: ClienteEditComponent},
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
export const routingComponents =[ItemDetailComponent, ItemsComponent, UserComponent, UserCreateComponent, LoginComponent, ClienteEditComponent, ClienteCreateComponent]
