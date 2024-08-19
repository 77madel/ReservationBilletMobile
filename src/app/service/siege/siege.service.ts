import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Siege} from "../../models/Siege";

@Injectable({
  providedIn: 'root'
})
export class SiegeService {

  private apiSiege = "http://localhost:8080/siege/afficher/avion"
  constructor(private http: HttpClient) { }

  getSiege(avionId: number | null): Observable<any> {
    return this.http.get<Siege[]>(`${this.apiSiege}/${avionId}`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiSiege}`, data);
  }

  updateData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiSiege}/${id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiSiege}/${id}`);
  }
}
