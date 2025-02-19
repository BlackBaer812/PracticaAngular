import { Routes } from '@angular/router';
import { DadoComponent } from './dado/dado.component';
import { FormularioMatrialComponent } from './formulario-matrial/formulario-matrial.component';

export const routes: Routes = [
    {
        path: "dado",
        component: DadoComponent
    },
    {
        path: "form",
        component:FormularioMatrialComponent
    }
];
