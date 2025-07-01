import { Routes } from '@angular/router';
import { ListaTarefasComponent } from './componentes/lista-tarefas/lista-tarefas.component'; // Importe seu componente

export const routes: Routes = [
  { path: 'lista-tarefas', component: ListaTarefasComponent }, // Adicione esta linha
  { path: '', redirectTo: '/lista-tarefas', pathMatch: 'full' }, // Opcional: Redireciona a raiz para a lista de tarefas
  // Se você tiver outras rotas, elas viriam aqui
];