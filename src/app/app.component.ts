
import { Component, OnInit } from '@angular/core';
import { ClimaService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  //inicializamos variables
  cargando = false;
  
  ipActual = "";
  country_name = "";
  time_zone = "";

  detallesHoy = {};
  detallesProximos = [];

  constructor(private weatherService: ClimaService) {

  }

  async ngOnInit() {
    // Hacer que se muestre el indicador de carga
    this.cargando = true;

    // Obtener los datos de ubicación por la ip
    const datosDeUbicacion = await this.weatherService.obtenerDatosUbicacion();
    console.log("datos ip: "+JSON.stringify(datosDeUbicacion));

    this.ipActual = datosDeUbicacion.ip;
    this.country_name = datosDeUbicacion.country_name;
    this.time_zone = datosDeUbicacion.time_zone;
       

    // Obtener, ahora, los datos del clima
    const { latitude, longitude } = datosDeUbicacion;
    
    const datosDeClima = await this.weatherService.obtenerDatosDeClima(latitude, longitude);

    // Cortamos el array para mostrar la de hoy
    this.detallesHoy = datosDeClima.dataseries.slice(0, 1)[0];
    console.log("detalles "+JSON.stringify(this.detallesHoy));

    // Cortamos el array para mostrar las siguientes
    this.detallesProximos = datosDeClima.dataseries.slice(1, 5);

    // Ocultamos el indicador de carga 
    this.cargando = false;

  }

}
