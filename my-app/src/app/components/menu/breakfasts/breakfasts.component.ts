import { Component, OnInit } from '@angular/core';
import { menuModel } from 'src/app/models/menu.model';
import { WaiqueenService} from '../../../services/waiqueen.service';
import { type } from 'os';
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
 
  constructor(private _service:WaiqueenService ) { }


  ngOnInit() {

    const filter =(array ,type)=>{
      const resul = array.filter((element =>{
        if(type === 'bFast'){
          return element['categoria'] === 'Desayuno'
        }

      }))
      return resul;
    }
  }

}

//this.menuBreakfast.gentmens() 
