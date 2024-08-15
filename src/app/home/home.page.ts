import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  mosque: String = "assets/images/djenne-mosque 1.png";
  pays: any =[ {
    "name": "Mali",
    "capital": "Bamako",
    "prix": 1500
  },
  {
    "name": "Burkina Faso",
    "capital": "Ouaga",
    "prix": 2000
  },
  {
    "name": "Côte d'Ivoire",
    "capital": "Abidjan",
    "prix": 2500
  },
  {
    "name": "Sénégal",
    "capital": "Dakar",
    "prix": 3000
  },
  {
    "name": "Guinée",
    "capital": "Conakry",
    "prix": 3500
  }
  ]
  constructor() {}
}
