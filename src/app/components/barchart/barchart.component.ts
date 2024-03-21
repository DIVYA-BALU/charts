import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent {
  data: any;
  months: number[] = [...Array(12).keys()].map(month => month + 1);
  years: number[] = [2022, 2023, 2024]; 
  selectedMonth: number = 0;
  selectedYear: number = 0;

  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
    const currentDate = new Date();
    this.selectedMonth = currentDate.getMonth()+1;
    this.selectedYear = currentDate.getFullYear();

    this.fetchData();
  }

  fetchData(): void {
    this.userService.getRegistrationCountForMonthAndYear(this.selectedMonth, this.selectedYear)
      .subscribe(data => {
        this.updateChartData(data);
      });
  }

  updateChartData(data: any): void {
    this.data = {
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Registration Count',
          backgroundColor: 'blue',
          data: Object.values(data)
        }
      ]
    };
  }

  onMonthChange(month: number): void {
    this.selectedMonth = month;
    this.fetchData();
  }

  onYearChange(year: number): void {
    this.selectedYear = year;
    this.fetchData();
  }
}


interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

interface ChartDataset {
  label: string;
  data: number[];
}
