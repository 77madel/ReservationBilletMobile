import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ToastController} from "@ionic/angular";

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

  constructor(private http:HttpClient,private toastController: ToastController) { }

  getNotification(): Observable<Notificat[]>{
    return this.http.get<Notificat[]>(this.apiGetNotification);
  }
  postNotification(notificationData: Notificat): Observable<Notificat> {
    return this.http.post<Notificat>(this.apiPostNotification, notificationData);
  }

  async showNotification(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,  // durée d'affichage de la notification
      position: 'top', // position de la notification
      buttons: [
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });

    toast.present();
  }
}
