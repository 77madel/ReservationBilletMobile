import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonImg, IonSpinner, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {Router} from "@angular/router";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonImg, IonSpinner]
})
export class SplashScreenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/home1'); // Remplacez '/home' par la route de votre page principale
    },2000); // Délai de 1 secondes
  }

}
