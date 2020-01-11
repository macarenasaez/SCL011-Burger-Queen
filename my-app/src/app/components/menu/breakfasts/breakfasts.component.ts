import { Component, OnInit } from '@angular/core';
import { menuModel } from 'src/app/models/menu.model';
import { WaiqueenService} from '../../../services/waiqueen.service';
import { filter } from 'rxjs/operators'
import { element } from 'protractor';




@Component({
  selector: 'app-breakfasts',
  templateUrl: './breakfasts.component.html',
  styleUrls: ['./breakfasts.component.css']
})
export class BreakfastsComponent implements OnInit {


//variable de tipo array para guardar lo que retorna del servicio
  menuBreakfast:menuModel[]=[];

  
  //variable para guardar la data filtrada segun la categoria

  bFast:menuModel[]=[];
 
  constructor(private waiqueenservice:WaiqueenService) { 
    console.log("Servicio activo")
  }


  ngOnInit() {

    this.waiqueenservice.getmens().subscribe((resp:any)=>{
      this.menuBreakfast=resp;
      //= filter(this.menuBreakfast, 'Desayuno');
      this.bFast  = this.menuBreakfast.filter(element => element['categoria']=== "Desayuno")
    })
    
  }

}

