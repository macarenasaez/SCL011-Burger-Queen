import { Component, OnInit } from '@angular/core';
import { menuModel } from 'src/app/models/menu.model';
import { WaiqueenService} from '../../../services/waiqueen.service';

@Component({
  selector: 'app-breakfasts',
  templateUrl: './breakfasts.component.html',
  styleUrls: ['./breakfasts.component.css']
})
export class BreakfastsComponent implements OnInit {


//variable para guardar loque retorna
  menu:menuModel[]=[];

  breakfasts:menuModel[]=[]
 
  constructor(private waiqueenservice:WaiqueenService ) { }

  ngOnInit() {
  }

}


