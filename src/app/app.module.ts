import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';

import { environment } from '../environments/environment';

import {
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
