import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MyColorComponent } from './component/my-color/my-color.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputDetailsComponent } from './component/input-details/input-details.component';
import { HttpClientModule } from '@angular/common/http';
import { OutputDetailsComponent } from './component/output-details/output-details.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // MyColorComponent,
    InputDetailsComponent,
    OutputDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
