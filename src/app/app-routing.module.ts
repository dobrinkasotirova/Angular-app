import { ImageDashboardComponent } from './image-dashboard/image-dashboard.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ImageDashboardComponent, pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
