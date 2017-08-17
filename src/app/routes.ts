import {Routes} from '@angular/router';
import {CategoriasComponent} from './common/categorias/categorias.component';
import {HomeComponent} from './common/home/home.component';
import { PerfilComponent } from './common/perfil/perfil.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/home'
    },
    {
        path: 'categorias', component: CategoriasComponent 
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'perfil', component: PerfilComponent
    }
]