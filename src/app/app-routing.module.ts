import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorDataComponent } from './pages/monitor-data/monitor-data.component';
import { SingleDayMonitorDataComponent } from './pages/single-day-monitor-data/single-day-monitor-data.component';

const routes: Routes = [
  {path: '', redirectTo: 'single-day-monitor-data', pathMatch: 'full'},
  {path: 'single-day-monitor-data', component: SingleDayMonitorDataComponent},
  {path: 'monitor-data', component: MonitorDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
