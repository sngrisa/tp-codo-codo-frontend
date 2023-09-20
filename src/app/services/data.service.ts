import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCard } from '../components/interfaces/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData = (): Observable<DataCard[]> => {
    return this.http.get<DataCard[]>(`./assets/data.json`);
  }


}
