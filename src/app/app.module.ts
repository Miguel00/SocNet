import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdIconModule} from '@angular/material';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { CategoriasComponent } from './common/categorias/categorias.component';
import { HomeComponent } from './common/home/home.component';


import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './common/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CategoriasComponent,
    HomeComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, MdToolbarModule,
    MdTabsModule,MdCardModule,MdIconModule,RouterModule.forRoot(routes),

  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
