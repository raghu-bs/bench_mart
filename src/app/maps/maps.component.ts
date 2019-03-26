import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  title: string;
  lat: number;
  lng: number;
  constructor() { }

  ngOnInit() {
    this.title = 'Ampersand Academy';
    this.lat = 13.039306;
    this.lng = 80.216040;
  }

}