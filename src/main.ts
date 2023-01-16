import {bootstrapApplication} from '@angular/platform-browser';
import {PancakeReceiptsAppComponent} from './app/pancake-receipts-app/pancake-receipts-app.component';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(PancakeReceiptsAppComponent,{
  providers: []
})
  .catch(err => console.error(err));
