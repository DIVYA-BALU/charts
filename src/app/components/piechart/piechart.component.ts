import { Component } from '@angular/core';
import { DistrictRegistration } from 'src/app/model/district-registration';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent {
  data: ChartData = { labels: [], datasets: [{ data: [] }] };
  label: string[] = [];
  count: number[] = [];
  options: any;

  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
    this.userService.getDistrictWiseRegistrationCount().subscribe(data => {
      data.forEach(
        (value) => {
          this.label.push(value.district);
          this.count.push(value.registrationCount);
        }
      )
      this.createChart();
    });
  }

  createChart(): void {
    this.data = {
      labels: this.label,
      datasets: [
        {
          data: this.count,
        }
      ]
    };
  }

}

export interface ChartData {
  labels: string[];
  datasets: { data: number[] }[];
}
