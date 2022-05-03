import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageDashboardComponent } from './image-dashboard/image-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageModel } from './image-dashboard/image-dashboard.model';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageDashboardComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
