import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-lista-tarefas',
  templateUrl: './app.component.html', // Corrija se estiver diferente
  styleUrls: ['./app.component.css'] // Certifique-se de que o CSS também existe
})
export class AppComponent { // O nome da classe deve ser AppComponent
  title = 'minha-lista-de-tarefas'; // Defina o título aqui
}