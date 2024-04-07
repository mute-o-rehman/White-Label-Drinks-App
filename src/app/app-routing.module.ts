import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';

const routes: Routes = [
  { path: '', component: DrinkListComponent },
  { path: 'drink/:id', component: DrinkDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
