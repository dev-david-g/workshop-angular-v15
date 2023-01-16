import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PancakeReceiptListComponent} from './pancake-receipt-list/pancake-receipt-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: PancakeReceiptListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {})]
})
export class AppRoutingModule {

}
