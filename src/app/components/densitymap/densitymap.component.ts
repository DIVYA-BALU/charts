import { Component } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.heat';
import { User } from 'src/app/model/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { HttpClient } from '@angular/common/http';
import { MapResponse } from 'src/app/model/map-response';

@Component({
  selector: 'app-densitymap',
  templateUrl: './densitymap.component.html',
  styleUrls: ['./densitymap.component.scss']
})
export class DensitymapComponent {
  private map!: L.Map | L.LayerGroup<any>;


  constructor(private userService: UserserviceService, private http: HttpClient) { }
  dataResponse: MapResponse[] = [];

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.dataResponse = response;
        this.initMap();
      }
    )
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [36, -100],
      zoom: 3
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; Divya'
    }).addTo(this.map);


    this.dataResponse.forEach((record) => {

      L.circleMarker([record.latitude, record.longitude, record.count], {
        radius: 10,
        color: 'blue',
        fillColor: '#3388ff',
        fillOpacity: 0.5
      }).addTo(this.map);

    });
  }


}
