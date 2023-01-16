import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PancakeReceiptListComponent} from './pancake-receipt-list/pancake-receipt-list.component';
import {PancakeReceiptDetailsComponent} from './pancake-receipt-details/pancake-receipt-details.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: PancakeReceiptListComponent},
  {path: 'list/:id', component: PancakeReceiptDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {})]
})
export class AppRoutingModule {

}
