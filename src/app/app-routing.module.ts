import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { B2fSearcherComponent } from './b2f-searcher/b2f-searcher.component';
import { B2fBookComponent } from './b2f-book/b2f-book.component';


const routes: Routes = [
  {
      path: 'web/disney/results/2-days/2-adults/3-children/book',
      component: B2fBookComponent
  },
  {
      path: 'web/disney/results/2-days/2-adults/3-children',
      component: B2fSearcherComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'web/disney/results/2-days/2-adults/3-children' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



