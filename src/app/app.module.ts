import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; // Certifique-se de que aponta para app.component
import { ListaTarefasComponent } from './componentes/lista-tarefas/lista-tarefas.component'; // Caminho correto para o componente

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }