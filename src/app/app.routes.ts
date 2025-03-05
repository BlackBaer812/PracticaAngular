import { Routes } from '@angular/router';
import { DadoComponent } from './dado/dado.component';
import { FormularioMatrialComponent } from './formulario-matrial/formulario-matrial.component';
import { VacioComponent } from './vacio/vacio.component';
import { ListadoPaisesComponent } from './componenetes/listado-paises/listado-paises.component';
import { DragDropComponent } from './componenetes/drag-drop/drag-drop.component';

export const routes: Routes = [
    {
        path: "dado",
        component: DadoComponent
    },
    {
        path: "form",
        component:FormularioMatrialComponent
    },
    {
        path: "",
        component:VacioComponent
    },
    {
        path: "paises",
        component:ListadoPaisesComponent
    },
    {
        path: "lista",
        component:DragDropComponent
    }
];
