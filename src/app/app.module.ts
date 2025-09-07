import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    // ChildComponent,

    
  ],
  imports: [
     
    BrowserModule,
    RouterModule.forRoot(routes),   // ✅ Register routes
   

  ],
  providers: [
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
