import { Component, OnInit } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Component({
  standalone: false,
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html', // Caminho correto para o HTML
  styleUrls: ['./lista-tarefas.css'] // Caminho correto para o CSS
})
export class ListaTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  novaTarefaTitulo: string = '';
  nextId: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.tarefas = [
      { id: 0, titulo: 'Aprender Angular', concluida: false },
      { id: 1, titulo: 'Fazer lista de compras', concluida: true }
    ];
    this.nextId = this.tarefas.length > 0 ? Math.max(...this.tarefas.map(t => t.id)) + 1 : 0;
  }

  adicionarTarefa(): void {
    if (this.novaTarefaTitulo.trim()) {
      this.tarefas.push({
        id: this.nextId++,
        titulo: this.novaTarefaTitulo.trim(),
        concluida: false
      });
      this.novaTarefaTitulo = '';
    }
  }

  alternarStatusTarefa(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }

  removerTarefa(id: number): void {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
  }
}