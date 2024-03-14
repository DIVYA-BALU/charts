import { Component } from '@angular/core';
import { MapResponse } from 'src/app/model/map-response';
import { UserserviceService } from 'src/app/services/userservice.service';
import * as L from 'leaflet';
import 'leaflet.heat';

declare var HeatmapOverlay:any;

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent {
  private map!: L.Map ;

  data: MapResponse[] = [];

  constructor(private userService: UserserviceService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.data = data;
        this.initMap();
      }
    )
  }

  initMap() {
    this.map = L.map('map', {
      center: [36, -100],
      zoom: 3
    });

    const baseLayer = L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '...',
        maxZoom: 18
      }
    );
    
    const cfg = {
      "radius": 2,
      "maxOpacity": .8,
      "scaleRadius": true,
      "useLocalExtrema": true,
      latField: 'latitude',
      lngField: 'longitude',
      valueField: 'count'
    };

    const heatmapLayer = new HeatmapOverlay(cfg);

    this.map.addLayer(baseLayer); // Add baseLayer to map
    heatmapLayer.setData(this.data);
    this.map.addLayer(heatmapLayer);

  }
}
