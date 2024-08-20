import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonIcon, IonTabButton, IonTabBar, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { airplane, home, library, notifications, person, personOutline, playCircle, radio, search } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
import { AccueilService } from './accueil.service'; 
import { NavController } from '@ionic/angular';
import { SearchPipe } from './search.pipe'; // Importez le pipe autonome ici
import { VilleNotFoundComponent } from './ville-not-found/ville-not-found.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [
    VilleNotFoundComponent,
    IonList, 
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
    SearchPipe, // Importez directement le pipe ici
  ]
})
export class AccueilPage implements OnInit {

  @ViewChild(VilleNotFoundComponent) popup!: VilleNotFoundComponent;

 
  mosque: String = "assets/Images/djenne-mosque 1.png";

  logo: String = "assets/Images/logo.png";

  villes: any[] = []; // Variable pour stocker les données récupérées

  searchText: string = ''; // Texte de recherche

  filteredVilles: any[] = [];

  showSuggestions: boolean = false;

  paysArrive: string | undefined;

  filteredPaysDArrivee: never[] | undefined;

  chercheValue:string='';
  
  

  constructor(private accueilService: AccueilService, private nvControle:NavController) { 
    addIcons({ library, playCircle, radio, search, home, airplane, notifications, person });
  }
  ngOnInit(): void {
    this.loadVilles();
  }
  

  // Méthode pour charger les données
  loadVilles() {
    this.accueilService.getData().subscribe({
      next: data => {
        this.villes = data;
      },
      error: error => {
        console.error('Erreur lors de la récupération des données', error);
      },
      complete: () => {
        console.log('Récupération des données terminée');
      }
    });
  }

  // Méthode pour la recherche dans la bar de recherche
  onSearch() {
    // Vérifie si la barre de recherche contient du texte après avoir supprimé les espaces en début et fin
    // Si la longueur du texte est supérieure à 0, affiche les suggestions
    this.showSuggestions = this.searchText.trim().length > 0;

    // Filtre la liste des villes en fonction du texte entré dans la barre de recherche
    // `filter` parcourt chaque ville dans `this.villes`
    this.filteredVilles = this.villes.filter(ville =>
      
      // Convertit le nom de chaque ville en minuscules pour une comparaison insensible à la casse
      // Vérifie si le nom de la ville contient la chaîne de caractères entrée par l'utilisateur
      ville.nom.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Methode pour mettre le texte cliqué en entier dans la bar de recherche
  selectCity(ville: any) {

    // Met à jour le texte de la barre de recherche avec le nom de la ville sélectionnée
    this.searchText = ville.nom;
    
     // Masque la liste des suggestions après la sélection
    this.showSuggestions = false;
  }

  // Methode permettant la redirection vers notre redirection avec l'initialisation du champ de la ville d'arrivée avec la ville selectionnéé
  
  aff(villeNom?: string) {
    const searchValue = villeNom || this.searchText;

    const isVillePresent = this.villes.some(ville =>
      ville.nom.toLowerCase() === searchValue.toLowerCase()
    );

    if (isVillePresent) {
      this.nvControle.navigateForward([`/search-vol-form`, { 
        searchValue: searchValue,
      }]);
    } else {
      // Si la ville n'est pas trouvée, affichez le popup
      this.popup.message = 'La ville spécifiée n\'est pas dans la liste.';
      this.popup.isVisible = true;
      this.searchText = '';
      this.showSuggestions = false;
    }
  }
}

  
  



  

