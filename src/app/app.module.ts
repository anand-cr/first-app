import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    // we add this so angular knows about its existence and
    //  make sure it is imported so type script knows where to find it
    ServerComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [], 
  bootstrap: [AppComponent] //which component when we start
})
export class AppModule { }
