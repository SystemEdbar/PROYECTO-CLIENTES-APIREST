import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Item } from './item'
import { ItemService } from './item.service'
import { ItemDetailComponent } from './item-detail.component'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Object

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {
    this.checkLocalStorage()
  }
  checkLocalStorage(){
      if(localStorage.getItem('access_token')){
//         localStorage.removeItem('access_token');
             this.itemService.getItems().subscribe(
               response => {
                 this.items=response.result.cliente;
               },
               error => console.log(error)
             );
      }else{
        this.router.navigate(['login'])
      }
    }

    onCerrar(){
        localStorage.removeItem('access_token')
        this.router.navigate(['login'])
    }
    onEliminar(id: number){
      this.itemService.deleteCliente(id).subscribe(
         response => {
            this.checkLocalStorage()
         },
         error => console.log(error)
     );
    }
    onEditar(id: number){
      this.router.navigate(['cliente/edit/'+id])
    }
}
