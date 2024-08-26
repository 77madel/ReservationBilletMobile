import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonItem,
  IonInput,
  IonSelectOption,
  IonSelect, IonLabel
} from '@ionic/angular/standalone';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ActivatedRoute, Router } from '@angular/router';
import { Siege } from 'src/app/models/Siege';
import { PassageServiceService } from 'src/app/services/passager/passage-service.service';
import { Passager } from 'src/app/models/Passager';

@Component({
  selector: 'app-information-passager',
  templateUrl: './information-passager.page.html',
  styleUrls: ['./information-passager.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonCard, IonItem, IonInput, IonSelectOption, IonSelect, IonLabel]
})
export class InformationPassagerPage implements OnInit {

  siege!: Siege;
  siegeSelectionne: any;
  classeSiege!: string;

  volId!: number;
  volDetails: any;
  nombreDepassager!: number;
  selectedClass!: string;
  avionId!: number;


  passagers={
    prenom: '',
    nom: '',
    numeroDePassPort: '',
    numeroDeVisa: '',
    siege: {
      id: ''
    },
    // reservation_id: 0,
  }

  constructor(private route: ActivatedRoute, private router: Router,private serv:PassageServiceService) {addIcons({ arrowBackCircleOutline }); }

  ngOnInit() {
    //this.classeSiege = this.selectedClass;
    // Récupérer les données passées via navigation
    if (this.router.getCurrentNavigation()?.extras.state) {
      // @ts-ignore
      this.siegeSelectionne = this.router.getCurrentNavigation().extras.state['siege'];
      //this.avionId = this.router.getCurrentNavigation().extras.state['avionId'];
      console.log('Siège reçu:', this.siegeSelectionne);
    } else {
      console.warn('Aucun siège reçu');
    }

    this.route.queryParams.subscribe(params => {
      this.volId = params['volId'];
      this.volDetails = JSON.parse(params['volDetails']); // Convertir la chaîne JSON en objet
      this.nombreDepassager = params['nombreDepassager'];
    });
    this.avionId = this.volDetails.avionDepart.id;

    this.selectedClass ="ECONOMIQUE";

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

  // Ouvrir Choisir Chaise
  goToChoisirChaise(avionId: number, classeSiege: string) {
    console.log("classeSiege:"+this.classeSiege);
    console.log("avionId:"+avionId);
    if (this.classeSiege) { // Vérifier si une classe a été sélectionnée
      if (this.classeSiege === "ECONOMIQUE") {
        this.router.navigate(['/classe-economique', avionId]);
      } else if (this.classeSiege === "AFFAIRE") {
        this.router.navigate(['/classe-affaire/', avionId]);
      } else {
        console.error("Classe de siège invalide");
      }
    } else {
      console.warn("Veuillez sélectionner une classe de siège");
    }
  }

  //test

  enregistrer() {
    this.passagers.siege.id = this.siegeSelectionne.id;
    console.log(this.passagers);
    this.serv.addPassager(this.passagers)
      .subscribe(response => {
        console.log('Passager enregistré:'+response.nom+response.prenom);
        alert('Reservation effectuee')
        this.router.navigate(['/orange-money'])
      }, error => {

        console.error('Erreur lors de l\'enregistrement:', error);
      });
  }

  retour() {
    window.history.back();
  }
}
