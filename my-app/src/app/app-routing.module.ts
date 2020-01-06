import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { startScreenComponent } from './components/startScreen/startScreen.component';
import { MenuComponent } from './components/menu/menu.component';
import { PedidosComponent } from "../app/components/pedidos/pedidos.component";
import { MesasComponent } from './components/mesas/mesas.component';
import { BurguerComponent } from './components/menu/burguer/burguer.component';
import { BreakfastsComponent } from './components/menu/breakfasts/breakfasts.component';




const ROUTES: Routes = [
{ path: 'home', component:startScreenComponent },
{ path: 'pedidos', component: PedidosComponent},

{ 
  path: 'menu/:id', 
  component:MenuComponent,
  children:[
    { path: 'burguer', component: BurguerComponent},
    {path:'breakfasts',component:BreakfastsComponent},
  ]
},

{ path: 'pedidos', component:PedidosComponent},
{ path: 'mesas', component:MesasComponent },
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: '**', component: startScreenComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
