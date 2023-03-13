import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MonitorDataComponent } from './pages/monitor-data/monitor-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MonitorDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbAccordionModule,
    NgbPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
