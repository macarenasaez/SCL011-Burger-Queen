import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Servicios

//Componentes
import { AppComponent } from './app.component';
import { startScreenComponent } from './components/startScreen/startScreen.component';



@NgModule({
  declarations: [
    AppComponent,
    startScreenComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
