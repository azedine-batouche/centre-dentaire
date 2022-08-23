import { Component, AfterViewInit } from '@angular/core';
import { translate } from '@angular/localize/src/utils';
import { TranslateService } from '@ngx-translate/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map:any;
  private toolTipMessage: string = '';

  constructor(private translate : TranslateService) { 
    this.translate.get('contact.mapTitle').subscribe(data=> this.toolTipMessage=data, error => this.toolTipMessage="We are here !"); 
  }

  private lat: number = 48.83260726928711;
  private log: number = 2.710822105407715;
  
  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.lat , this.log ],
      zoom: 14,
      markerZoomAnimation: true
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    
    const circle = L.marker([this.lat, this.log], ).addTo(this.map);

    const coment =  L.popup()
    .setLatLng([this.lat, this.log])
    .setContent( this.toolTipMessage )
    .openOn(this.map);
  }

    ngAfterViewInit(): void {
      this.initMap();
    }
}
