import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardContainerComponent} from "./card-container/card-container.component";
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ShufflingCubeComponent } from './shuffling-cube/shuffling-cube.component';

@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    DynamicTableComponent,
    ShufflingCubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
