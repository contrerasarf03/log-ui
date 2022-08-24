import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogListResultsComponent } from './pages/log-list/log-list-results/log-list-results.component';
import { LogListComponent } from './pages/log-list/log-list.component';


const routes: Routes = [
  { 
    path: '',
    component: LogListComponent,
    children: [
      {
        path: '',
        redirectTo: 'log-list',
        pathMatch: 'full'
      },
      {
        path: 'log-list',
        component: LogListResultsComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
