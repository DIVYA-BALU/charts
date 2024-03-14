import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent {

  data: any;
  label: number[] = [];
  count: number[] = [];
  options: any;

  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
    this.userService.getHourlyLoginData(new Date(2024, 2, 14, 12, 0, 0)).subscribe(data => {
      data.forEach(
        (value) => {
          this.label.push(value.hour);
          this.count.push(value.count);
        }
      )
      this.createChart();
    })
  }


  createChart() {
    this.data = {
      labels: this.label,
      datasets: [
        {
          label: "Hourly Counts",
          data: this.count,
          fill: false,
          borderColor: '#42A5F5'
        }
      ]
    };
    this.options = {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  }
}
