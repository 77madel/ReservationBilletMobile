import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonCard, IonItem, IonInput } from '@ionic/angular/standalone';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { Siege } from 'src/app/models/Siege';
import { PassageServiceService } from 'src/app/services/passager/passage-service.service';
import { Passager } from 'src/app/models/Passager';

@Component({
  selector: 'app-information-passager',
  templateUrl: './information-passager.page.html',
  styleUrls: ['./information-passager.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonCard, IonItem, IonInput]
})
export class InformationPassagerPage implements OnInit {

  siege!: Siege;
  siegeSelectionne: any;
  classeSiege!: string;

  passagers={
    prenom: '',
    nom: '',
    numeroDePassPort: '',
    numeroDeVisa: ''
    // siege_id: 0,
    // reservation_id: 0,
  }

  constructor(private router: Router,private serv:PassageServiceService) {addIcons({ arrowBackCircleOutline }); }

  ngOnInit() {
    this.classeSiege = "AFFAIRE";
    // Récupérer les données passées via navigation
    if (this.router.getCurrentNavigation()?.extras.state) {
      // @ts-ignore
      this.siegeSelectionne = this.router.getCurrentNavigation().extras.state['siege'];
      console.log('Siège reçu:', this.siegeSelectionne);
    } else {
      console.warn('Aucun siège reçu');
    }
  }

  // formulaires
  forms= [{}];
  maxForms = 1; // Nombre maximum de formulaires à afficher
  // Ajouter un formulaire de plus si le nombre maximum n'est pas atteint
  ajouterFormulaire() {
    if (this.forms.length < this.maxForms) {
      this.forms.push({}); // Ajoute un nouveau formulaire
    } else {
      console.log("Nombre maximum de formulaires atteint."); // Optionnel : Afficher un message
    }
  }

  //Ouvrir classeEconomique
  goToClasseEconomique(avionId: number, classeSiege: string) {
    if (classeSiege==="ECONOMIQUE") {
      this.router.navigate(['/classe-economique', avionId]);
    }if (classeSiege==="AFFAIRE") {
      this.router.navigate(['/classe-affaire/',avionId]);
    }else {
      console.log("choisir la classe du siege");
    }
  }

  //test

  enregistrer() {
    this.serv.addPassager(this.passagers)
      .subscribe(response => {
        console.log('Passager enregistré:'+response.nom+response.prenom);
        alert('Reservation effectuee')
        this.router.navigate(['/orange-money'])
      }, error => {

        // console.error('Erreur lors de l\'enregistrement:', error);
      });
  }

}