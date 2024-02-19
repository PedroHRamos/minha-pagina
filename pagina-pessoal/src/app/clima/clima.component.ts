import { ServicoService } from '../../services/servico.service';
import { JsonDTO } from '../../dto/JsonDTO';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  constructor(private servicoService: ServicoService) {
    
  }

  jsonModel: JsonDTO;
  lat: number;
  lon: number;
  cont: number;
  card: string;
  isAvaliable: boolean;
  imageFile: string;

  ngOnInit() {
    this.lat = 0;
    this.lon = 0;
    this.cont = 0;
    this.isAvaliable = false;
    this.imageFile = '';
    this.getCoord();
  }

  async getCoord() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.servicoService.obterClima(this.lat, this.lon).subscribe(data => {
          this.jsonModel = data;
          this.jsonModel.main.temp = parseFloat(this.jsonModel.main.temp.toFixed(1));
          this.jsonModel.main.temp_min = parseFloat(this.jsonModel.main.temp_min.toFixed(1));
          this.jsonModel.main.temp_max = parseFloat(this.jsonModel.main.temp_max.toFixed(1));
          this.setImage();
        });
      });
    } else {
      alert('Seu navegador não suporta geolocalização');
    }
  }

  setImage() {

    this.isAvaliable = true;
    let hours = new Date().getHours();
    let dayOrNight = 'Day';

    if (hours > 17) {
      dayOrNight = 'Night';
    }

    let sky = this.jsonModel.weather[0].main;

    /*
    Thunderstorm - tempestadezinha, sol ou lua tampado por nuvem e chuva forte, nuvem pretacom raio
    Drizzle - mesma coisa só quem sem raio
    Rain - Mesma coisa com nuvem branca
    Snow - nevezinha né pai
    Clear - sol ou lua
    Clouds - depende da porcentagem
    por default deixo o ícone do original para casos mais esquisitos
    */

    if (sky != 'Thunderstorm' && sky != 'Drizzle' && sky != 'Rain'
      && sky != 'Snow' && sky != 'Clear' && sky != 'Clouds') {
      this.imageFile = 'https://openweathermap.org/img/w/' + this.jsonModel.weather[0].icon + '.png';
    } else {
      this.imageFile = 'https://opedroramos.com/assets/img/' + dayOrNight + '-' + sky + '.png';
    }

    this.imageFile = this.imageFile;



  }

}
