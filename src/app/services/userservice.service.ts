import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/user';
import { Barmodel } from '../model/barmodel';
import { DistrictRegistration } from '../model/district-registration';
import { MapResponse } from '../model/map-response';
import { LoginResponse } from '../model/login-response';

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

  getAllUsers(): Observable<MapResponse[]> {
   return this.http.get<MapResponse[]>(`${this.userUrl}/getall`);
  }

  getHourlyLoginData(date: Date): Observable<LoginResponse[]> {
    console.log(date);
    
    const dateString = date.toISOString().slice(0, -1);
    const param = new HttpParams()
    .set('date',dateString);
    console.log(dateString);
    
    return this.http.get<LoginResponse[]>(`${this.userUrl}/logintime`, {params: param});
  }

}
