import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search-vol-form',
  templateUrl: './search-vol-form.page.html',
  styleUrls: ['./search-vol-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SearchVolFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
