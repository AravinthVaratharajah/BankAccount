import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TransactionComponent } from './transaction/transaction.component';
import { StatementComponent } from './statement/statement.component';
import { Navigation } from 'selenium-webdriver';
import { NavigationComponent } from './navigation/navigation.component';

export const routes: Routes = [
  { path: 'transaction', component: TransactionComponent },
  { path: 'statement', component: StatementComponent },
  { path: '', component: NavigationComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
