import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.page.html',
  styleUrls: ['./page-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class PageDetailsPage implements OnInit {
  public details: any;

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.details = navigation.extras.state['containerDetails'];
    }
  }

  goBack() {
    this.router.navigate(['']);
  }
}
