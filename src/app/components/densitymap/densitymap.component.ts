import { Component } from '@angular/core';
import * as L from 'leaflet';
import { User } from 'src/app/model/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-densitymap',
  templateUrl: './densitymap.component.html',
  styleUrls: ['./densitymap.component.scss']
})
export class DensitymapComponent {
  private map!: L.Map | L.LayerGroup<any>;


  constructor(private userService: UserserviceService, private http: HttpClient) { }
  dataResponse: User[] = [];

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

      L.circleMarker([record.latitude, record.longitude], {
        radius: 10,
        color: 'blue',
        fillColor: '#3388ff',
        fillOpacity: 0.5
      }).addTo(this.map);

    });
  }


}
