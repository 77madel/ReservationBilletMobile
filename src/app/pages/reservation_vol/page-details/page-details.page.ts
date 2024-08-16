import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton,IonLabel, IonItem, IonIcon} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.page.html',
  styleUrls: ['./page-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton,IonLabel, IonItem, IonIcon, CommonModule, FormsModule]
})
export class PageDetailsPage implements OnInit {
  public details: any;
  public flightDate: string;
  public flightTime: string;
  public price: string = '350 USD';

  constructor(private router: Router) {
    this.flightDate = new Date().toISOString().split('T')[0]; // Date actuelle
    this.flightTime = '08:30'; // Heure par défaut
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.details = navigation.extras.state['containerDetails'];
      console.log('Details:', this.details); // Déboguer pour vérifier les détails
    }
  }



  goBack() {
    this.router.navigate(['']);
  }
}
