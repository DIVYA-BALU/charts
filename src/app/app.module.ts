import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import {HttpClientModule} from '@angular/common/http'
import { ChartModule } from 'primeng/chart';
import { PiechartComponent } from './components/piechart/piechart.component';
import { FormsModule } from '@angular/forms';
import { DensitymapComponent } from './components/densitymap/densitymap.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    PiechartComponent,
    DensitymapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
