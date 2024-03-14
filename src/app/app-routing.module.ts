import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './components/barchart/barchart.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { DensitymapComponent } from './components/densitymap/densitymap.component';

const routes: Routes = [
  {
    path: "barchart",
    component: BarchartComponent
  },
  {
    path: "piechart",
    component: PiechartComponent
  },
  {
    path: "densitymap",
    component: DensitymapComponent
  },
  {
    path: "linechart",
    component: LinechartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
