import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Siege} from "../../models/Siege";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiNotification = "http://localhost:8080/notification/afficher"
  constructor(private http: HttpClient) { }

  getNotification(utilisateurId: number | null): Observable<any> {
    return this.http.get<Siege[]>(`${this.apiNotification}/${utilisateurId}`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiNotification}`, data);
  }

  updateData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiNotification}/${id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiNotification}/${id}`);
  }
}
