import { Component, OnInit } from '@angular/core';
import {Notificat, NotificationService} from "../../notification.service";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-list-notifications',
  templateUrl: './list-notifications.component.html',
  styleUrls: ['./list-notifications.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class ListNotificationsComponent  implements OnInit {

  constructor(private notificationService: NotificationService) { }

  notif : any[] = [];
  ngOnInit() {
    this.notificationService.getNotification().subscribe((dataNotif) => {
      this.notif = dataNotif;
      //console.log(this.notif);
    });
  }

}
