import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from 'src/components/create/create.component';
import { ListComponent } from 'src/components/list/list.component';

const routes: Routes = [
  { path: 'create-house', component: CreateComponent },
  { path: '', redirectTo: '/list-house', pathMatch: 'full' },
  { path: 'list-house', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }