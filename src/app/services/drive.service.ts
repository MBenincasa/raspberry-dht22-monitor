import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get(`${environment.url}`)
  }
}
