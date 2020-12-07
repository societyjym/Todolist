import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ToDoListComponent } from "./pages/to-do-list/to-do-list.component";
import { CalendarioComponent  } from "./pages/calendario/calendario.component";


const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'Todolist', component:ToDoListComponent},
  {path: 'Calendario', component:CalendarioComponent },
  {path: '**', pathMatch:'full', redirectTo:'' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
