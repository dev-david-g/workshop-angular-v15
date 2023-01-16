import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PancakeReceiptListComponent} from './pancake-receipt-list/pancake-receipt-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: PancakeReceiptListComponent},
  {path: 'list/:id', loadComponent: () => import('./pancake-receipt-details/pancake-receipt-details.component')
      .then(m => m.PancakeReceiptDetailsComponent)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {})]
})
export class AppRoutingModule {

}
