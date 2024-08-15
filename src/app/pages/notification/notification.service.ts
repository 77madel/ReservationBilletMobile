import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Notificat {
  id: number,
  date: String,
  heure: String,
  contenu: String
}
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiGetNotification = "http://localhost:8080/Notification/afficher";
  private apiPostNotification = "http://localhost:8080/Notification/ajout";

  constructor(private http:HttpClient) { }

  getNotification(): Observable<Notificat[]>{
    return this.http.get<Notificat[]>(this.apiGetNotification);
  }
  postNotification(notificationData: Notificat): Observable<Notificat> {
    return this.http.post<Notificat>(this.apiPostNotification, notificationData);
  }
}
