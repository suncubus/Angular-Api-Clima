
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { FormatearFechaPipe } from './formatear-fecha.pipe';
import { FechaANombreDiaPipe } from './fecha-anombre-dia.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailComponent,
    FormatearFechaPipe,
    FechaANombreDiaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
