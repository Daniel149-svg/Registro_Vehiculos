import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectoComponentComponent } from './proyecto-component/proyecto-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';

export const routes: Routes = [
    {path: "", component: HomeComponentComponent

    },

    {path: "proyectos", component: ProyectoComponentComponent
    },

    {path: "quienes", component: QuienesComponentComponent

    },

    {path: "contactanos", component: ContactoComponentComponent

    },
    {path: "actualiza/:id", component: ActualizaComponentComponent},

];

