import { Component, OnInit } from '@angular/core';
import { menuModel } from '../../../models/menu.model';
import { WaiqueenService} from '../../../services/waiqueen.service';
import { orderModel } from '../../../models/order.model';


@Component({
  selector: 'app-burguer',
  templateUrl: './burguer.component.html',
  styleUrls: ['./burguer.component.css']
})


export class BurguerComponent implements OnInit {

  //Varible para almacenar lo que retorna la funcion que esta alojada en el servicio
  menus: menuModel[]=[];
  //Variables de almacenamiento segun el filtrado
  burguer:menuModel[]=[]; 
  drinks:menuModel[]=[];
  filling:menuModel[]=[];
  
  accom:menuModel[]=[];
  //Variable para almacenar orden
  arrayOrder: Array<orderModel> = [];
  objOrder: orderModel = { burguer: 'no desea', filling: 'no desea', acomp:'no desea',
    drink:'no desea',
    total: 0, id:'no desea' };

  //inyecto mi servicion
  constructor(private waiqueenservice:WaiqueenService) { }

  ngOnInit() {

    const filter = (array, type) => {
      const result = array.filter((element=>{
        if(type === 'burguer'){
          return element['categoria'] === 'Hamburguesas'
        }else 
        if(type === 'drinks'){
          return element['categoria'] === 'Bebidas'
        }else 
        if(type === 'accom'){
        return element['categoria'] === 'Acompañamientos'
        }
        if(type === 'bFast'){
          return element['categoria'] === 'Desayuno'
        } else 
        if(type === 'filling'){
          return element['categoria'] === 'Relleno'
        }
        }))
        return result;
    }
  
   this.waiqueenservice.getmens()
        .subscribe( (resp: any) => {
          this.menus = resp;
          this.burguer =  filter(this.menus, 'burguer')
          this.drinks =  filter(this.menus, 'drinks')
          this.filling =  filter(this.menus, 'filling')
          this.accom =  filter(this.menus, 'accom')
          console.log(this.burguer);
        })
  }
  

 addItem(name:string, categoria:string){
   console.log('-----------------------');
   console.log(categoria);
   console.log('-----------------------');
   switch (categoria) {
     case 'Hamburguesas':
      this.objOrder['burguer'] = name
       break;
       case 'Relleno':
        this.objOrder['filling'] = name
        break;
        case 'Bebidas':
          this.objOrder['drink'] = name
          break;
          case 'Acompañamientos':
            this.objOrder['acomp'] = name
            break;
   }

  this.arrayOrder.push(this.objOrder);
  
   console.log(this.arrayOrder);
 }

 deleteItem(){
   console.log('btn eliminar okey');
 }

}
