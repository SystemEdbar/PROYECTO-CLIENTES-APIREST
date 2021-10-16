import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { UserComponent } from './user/user.component'
import { UserCreateComponent } from './user/usercreate.component'
import { UserEditComponent } from './user/useredit.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'users', component: UserComponent},
  { path: 'user/edit', component: UserEditComponent},
  { path: 'user/create', component: UserCreateComponent},
  { path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
export const routingComponents =[ItemDetailComponent, ItemsComponent, UserComponent, UserEditComponent, UserCreateComponent, LoginComponent]
