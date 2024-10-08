import {Component, Input, OnInit} from '@angular/core';
// import {Notificat, NotificationService} from "../notification.service";
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {checkmarkCircleOutline} from "ionicons/icons";
import {NotificationService} from "../../../service/notification/notification.service";
import {Siege} from "../../../models/Siege";
import {Notification} from "../../../models/Notification";

@Component({
  selector: 'app-list-notifications',
  templateUrl: './list-notifications.component.html',
  styleUrls: ['./list-notifications.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class ListNotificationsComponent implements OnInit{

  @Input() utilisateurId!: number | null;
  Notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {  }

  ngOnInit() {
    this.listNotificationUtilisateur();
  }
  listNotificationUtilisateur(): void {
    if (this.utilisateurId !== null) {
      this.notificationService.getNotification(this.utilisateurId).subscribe(
        (response) => {
          this.Notifications = response;
          console.log(this.Notifications);
        },
        (error) => {
          console.error('Erreur lors de la récupération des données :', error);
        }
      );
    }
  }
}

  /*notif : any[] = [
    {
      "id": 1,
      "objet": "Rappel, votre avion decolle\n" +
        "      dans 1H à l’aeroport international\n" +
        "      Modibo Keita, j’espère que vous\n" +
        "      êtes prêt avec vos documents au complet.",
      "date": "2024-08-13",
      "heure": "11 h 12",
      "nomClient": null,
      "reservation": null,
      "vol": null
    },
    {
      "id": 2,
      "objet": "Rappel, votre avion decolle\n" +
        "      dans 1H à l’aeroport international",
      "date": "2024-08-13",
      "heure": "03:49:22",
      "utilisateur": null,
      "reservation": null,
      "vol": null
    },
    {
      "id": 3,
      "objet": "Rappel, votre avion decolle\n" +
        "      dans 1H à l’aeroport international\n" +
        "      Modibo Keita, j’espère que vous\n",
      "date": "2024-08-13",
      "heure": "06:35:46",
      "utilisateur": null,
      "reservation": null,
      "vol": null
    },
    {
      "id": 4,
      "objet": "Rappel, votre avion decolle\n",
      "date": "2024-08-13",
      "heure": "07:04:56",
      "utilisateur": null,
      "reservation": null,
      "vol": null
    },
    {
      "id": 5,
      "objet": "Rappel, votre avion decolle\n" +
        "      dans 1H à l’aeroport international\n",
      "date": "2024-08-13",
      "heure": "07:04:58",
      "utilisateur": null,
      "reservation": null,
      "vol": null
    }
  ];*/



