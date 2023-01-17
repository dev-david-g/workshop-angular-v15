import {bootstrapApplication} from '@angular/platform-browser';
import {PancakeReceiptsAppComponent} from './app/pancake-receipts-app/pancake-receipts-app.component';
import {provideRouter, Routes} from "@angular/router";
import {PancakeReceiptListComponent} from "./app/pancake-receipt-list/pancake-receipt-list.component";
import {DATE_PIPE_DEFAULT_OPTIONS} from "@angular/common";
import {inject} from "@angular/core";
import {LoginService} from "./app/core/login.service";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: PancakeReceiptListComponent, canActivate: [() => inject(LoginService).isLoggedIn()]},
  {path: 'list/:id', loadComponent: () => import('./app/pancake-receipt-details/pancake-receipt-details.component')}
]


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(PancakeReceiptsAppComponent, {
  providers: [provideRouter(routes),
    {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {dateFormat: 'shortDate'}}]
})
  .catch(err => console.error(err));
