import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  constructor(private http: HttpClient) { }

  getAllData(date?: string): Observable<any> {
    if (date) {
      const params = new HttpParams().set('date', date);
      return this.http.get(`${environment.url}`, {params})
    }
    return this.http.get(`${environment.url}`)
  }
}
