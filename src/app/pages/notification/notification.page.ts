import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonAvatar, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {ListNotificationsComponent} from "./list-notifications/list-notifications.component";
import {addIcons} from "ionicons";
import {notificationsOutline} from "ionicons/icons";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonIcon, ListNotificationsComponent]
})
export class NotificationPage implements OnInit{

  utilisateurId!: number | null;
  constructor(private route: ActivatedRoute) {
    addIcons({ notificationsOutline });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.utilisateurId = idParam ? +idParam : null; // Ou une valeur par défaut si nécessaire
    });
  }

}
