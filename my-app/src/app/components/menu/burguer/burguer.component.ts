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
 //Variable que almacena el total
 total:number = 0;
 //Variable para almacenar orden
 arrayOrder: Array<orderModel> = [];
 objOrder: orderModel = { 
                         categoria: '',
                         name: '', 
                         price: 0,
                          id:''
                       };


  //Varible para almacenar lo que retorna la funcion que esta alojada en el servicio
  menus: menuModel[]=[];
  //Variables de almacenamiento segun el filtrado
  burguer:menuModel[]=[]; 
  drinks:menuModel[]=[];
  filling:menuModel[]=[];
  bFast:menuModel[]=[];
  accom:menuModel[]=[];
  

  //inyecto mi servicion
  constructor(private waiqueenservice:WaiqueenService) { 
    console.log('Servicio activo');
  }

  ngOnInit() { 
  //Filtrado de data segun categoria
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
          console.log('entro');
         console.log(this.menus);
          this.burguer =  filter(this.menus, 'burguer')
          this.drinks =  filter(this.menus, 'drinks')
          this.bFast =  filter(this.menus, 'bFast')
          this.filling =  filter(this.menus, 'filling')
          this.accom =  filter(this.menus, 'accom')
         
        })
  }
  addItem(name:string, price:number ,categoria:string){
    // console.log(`${name} ${price} ${categoria}`);
    
     this.objOrder.categoria = categoria;
     this.objOrder.name = name;
     this.objOrder.price = price;
     this.total += this.objOrder.price;
    // this.objOrder.total = this.objOrder.total + price;
     console.log(this.objOrder);
    
     this.arrayOrder.push(this.objOrder);
     
     this.objOrder = {id:'', categoria: '', name: '',  price: 0}
    
     console.log(`Este es el total ${this.total}`);
     console.log(this.arrayOrder);
     
   }
 
  

 deleteItem(){
   console.log('btn eliminar okey');
 }

}
