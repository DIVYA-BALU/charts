import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/user';
import { Barmodel } from '../model/barmodel';
import { DistrictRegistration } from '../model/district-registration';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userUrl = environment.userurl;
  constructor(private http: HttpClient) { }

  getUserByMonth(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}/getusersbymonth`);
  }

  getDayWiseRegistrationCountForThisMonth(): Observable<Barmodel> {
    return this.http.get<Barmodel>(`${this.userUrl}/day-wise-count`);
  }

  getDistrictWiseRegistrationCount(): Observable<DistrictRegistration[]> {
    return this.http.get<DistrictRegistration[]>(`${this.userUrl}/district-wise-count`);
  }

  getRegistrationCountForMonthAndYear(month: number, year: number): Observable<Barmodel> {
    return this.http.get<Barmodel>(`${this.userUrl}/registrations/day-wise-count/${month}/${year}`);
  }

  getAllUsers(): Observable<User[]> {
   return this.http.get<User[]>(`${this.userUrl}/getall`)
  }
}
