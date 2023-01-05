import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lista-de-exercicios',
    loadChildren: () =>
      import('./lista-de-exercicios/lista-de-exercicios.module').then(
        (module) => module.ListaDeExerciciosModule
      ),
  },
  {
    path: '**',
    redirectTo: 'lista-de-exercicios',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
