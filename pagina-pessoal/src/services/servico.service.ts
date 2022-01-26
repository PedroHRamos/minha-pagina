import { JsonDTO } from './../dto/JsonDTO';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

@Injectable({ 
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { 
    this.weatherAPIKey = environment.apiKey; 
  }

  weatherAPIKey: string; 

    obterClima(lat: number, lon: number){
      return this.http.get<JsonDTO>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&units=metric&appid=${this.weatherAPIKey}`);
    }

}
