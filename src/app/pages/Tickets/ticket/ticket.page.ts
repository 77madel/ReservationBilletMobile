import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonButtons, IonCard, IonThumbnail } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { airplaneOutline, arrowBackCircleOutline } from 'ionicons/icons';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton, IonButtons, IonCard, IonLabel, IonItem, IonThumbnail ]
})
export class TicketPage implements OnInit {

  constructor() { addIcons({arrowBackCircleOutline, airplaneOutline}); }

  ngOnInit() {
  }

}
