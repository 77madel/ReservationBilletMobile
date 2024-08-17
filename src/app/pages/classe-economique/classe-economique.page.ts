import { Component, OnInit } from '@angular/core'; // Importe les modules nécessaires à la création d'un composant Angular et à la gestion du cycle de vie OnInit.
import { CommonModule } from '@angular/common'; // Importe les fonctionnalités communes d'Angular, comme les directives et les pipes.
import { FormsModule } from '@angular/forms'; // Importe les fonctionnalités pour la gestion des formulaires en Angular.
import {
  IonButton, IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon, IonImg,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone'; // Importe divers composants Ionic utilisés pour construire l'interface utilisateur comme des boutons, des grilles, des lignes, etc.
import {Seat} from "./modelSiege";
import {ellipse, logoIonic} from "ionicons/icons";
import {addIcons} from "ionicons"; // Importe la classe `Seat` à partir du fichier `modelSiege`, qui représente un siège avec ses propriétés.

addIcons({ ellipse });

@Component({ // Déclare un composant Angular.
  selector: 'app-classe-economique', // Définit le sélecteur du composant, utilisé pour insérer ce composant dans le template.
  templateUrl: './classe-economique.page.html', // Spécifie le chemin du fichier template HTML associé à ce composant.
  styleUrls: ['./classe-economique.page.scss'], // Spécifie le chemin du fichier de styles SCSS associé à ce composant.
  standalone: true, // Indique que ce composant est autonome, c'est-à-dire qu'il peut être utilisé indépendamment.
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonImg]
  // Liste les modules et composants Ionic et Angular importés pour l'utilisation dans ce composant.
})
export class ClasseEconomiquePage implements OnInit { // Déclare la classe du composant, implémente OnInit pour utiliser la méthode `ngOnInit`.
  seatRows: Seat[][] = [];  // Initialise une propriété `seatRows` pour stocker un tableau de rangées de sièges, chaque rangée contenant un tableau d'objets `Seat`.

  ngOnInit() { // Méthode du cycle de vie Angular qui s'exécute après l'initialisation du composant.
    this.initializeSeats(); // Appelle la méthode `initializeSeats` pour initialiser les sièges lors du chargement du composant.
  }


  initializeSeats() { // Méthode pour initialiser les sièges et remplir le tableau `seatRows`.
    const seatLetters = ['A', 'B', 'C', 'D', 'E', 'F'];  // Déclare un tableau contenant les lettres utilisées pour identifier les colonnes de sièges (A à F).
    let seatNumber = 1; // Initialise le numéro du siège, qui sera incrémenté pour chaque rangée.

    for (let i = 0; i < 8; i++) {  // Boucle pour créer 8 rangées de sièges.
      const row: Seat[] = []; // Crée un tableau pour une nouvelle rangée de sièges.
      for (let j = 0; j < seatLetters.length; j++) { // Boucle pour créer les sièges dans chaque rangée, correspondant à chaque lettre de `seatLetters`.
        const seatStatus = this.getRandomStatus(); // Appelle la méthode `getRandomStatus` pour obtenir un statut aléatoire pour chaque siège (libre, occupé ou sélectionné).
        row.push(new Seat(`${seatNumber}${seatLetters[j]}`, seatStatus)); // Crée un nouvel objet `Seat` avec un numéro de siège et un statut, puis l'ajoute à la rangée actuelle.
      }
      this.seatRows.push(row); // Ajoute la rangée complète de sièges au tableau `seatRows`.
      seatNumber++; // Incrémente le numéro du siège pour passer à la prochaine rangée.
    }
  }

  getRandomStatus(): 'free' | 'occupied' | 'selected' { // Méthode qui renvoie un statut aléatoire parmi 'free', 'occupied' ou 'selected'.
    const statuses = ['free', 'occupied', 'selected']; // Tableau contenant les différents statuts possibles pour un siège.
    return statuses[Math.floor(Math.random() * statuses.length)] as 'free' | 'occupied' | 'selected';
    // Renvoie un statut aléatoire en sélectionnant un élément au hasard dans le tableau `statuses`.
  }

  selectSeat(seat: Seat) { // Méthode pour gérer la sélection d'un siège lorsque l'utilisateur clique dessus.
    if (seat.status === 'free') { // Si le siège est libre...
      seat.status = 'selected'; // ...le statut du siège passe à 'selected' (sélectionné).
    } else if (seat.status === 'selected') { // Si le siège est déjà sélectionné...
      seat.status = 'free'; // ...le statut du siège repasse à 'free' (libre).
    }
  }
}
