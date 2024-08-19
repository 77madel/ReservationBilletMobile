import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonIcon, IonTabButton, IonTabBar, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { airplane, home, library, notifications, person, personOutline, playCircle, radio, search } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
import { AccueilService } from './accueil.service'; 
import { NavController } from '@ionic/angular';
import { SearchPipe } from './search.pipe'; // Importez le pipe autonome ici

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [IonList, 
    IonLabel, 
    IonItem, 
    IonTabBar, 
    IonTabButton, 
    IonIcon, 
    IonTabs, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    RouterLink,
    SearchPipe // Importez directement le pipe ici
  ]
})
export class AccueilPage implements OnInit {


  mosque: String = "assets/Images/djenne-mosque 1.png";
  logo: String = "assets/Images/logo.png";
  villes: any[] = []; // Variable pour stocker les données récupérées
  searchText: string = ''; // Texte de recherche
  filteredVilles: any[] = [];
  showSuggestions: boolean = false;
  paysArrive: string | undefined;
  filteredPaysDArrivee: never[] | undefined;
  

  constructor(private accueilService: AccueilService, private nvControle:NavController) { 
    addIcons({ library, playCircle, radio, search, home, airplane, notifications, person });
  }

  ngOnInit() {
    this.loadVilles(); // Appel à la méthode pour charger les données au démarrage
  }

  // Méthode pour charger les données
  loadVilles() {
    this.accueilService.getData().subscribe({
      next: data => {
        this.villes = data;
        console.log(this.villes);
      },
      error: error => {
        console.error('Erreur lors de la récupération des données', error);
      },
      complete: () => {
        console.log('Récupération des données terminée');
      }
    });
  }

  onSearch() {
    this.showSuggestions = this.searchText.trim().length > 0;
    this.filteredVilles = this.villes.filter(ville =>
      ville.nom.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  filterVille(event: any) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    this.filteredVilles = this.villes.filter(item => {
      return item.toLowerCase().indexOf(query) > -1;
    })
  }

  aff() {
    this.nvControle.navigateForward([`/search-vol-form`,{ searchValue: this.chercheValue }])
  }
    chercheValue:string='';
}
