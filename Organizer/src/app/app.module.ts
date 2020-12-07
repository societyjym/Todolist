import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { HeaderComponent } from './pages/inicio/header/header.component';
import { BodyComponent } from './pages/inicio/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ToDoListComponent,
    CalendarioComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
