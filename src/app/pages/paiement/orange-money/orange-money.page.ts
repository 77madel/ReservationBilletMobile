import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg,
  IonInput,
  IonTextarea,
  IonTabButton,
  IonButton,
  IonIcon,
  IonBackButton,
  IonAlert,
  IonApp,
} from '@ionic/angular/standalone';
import { Title } from '@angular/platform-browser';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { PaiementServiceService } from 'src/app/services/paiement/paiement-service.service';
import { Paiement } from 'src/app/models/paiement';

@Component({
  selector: 'app-orange-money',
  templateUrl: './orange-money.page.html',
  styleUrls: ['./orange-money.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonAlert,
    IonBackButton,
    IonIcon,
    IonButton,
    IonTabButton,
    IonTextarea,
    IonInput,
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
  ],
})
export class OrangeMoneyPage implements OnInit {
  paiement: Paiement = {
    codePays: '',
    numeroDeTelephone:'',
    montant: 150000,
    modePaiement:'ORANGE',
  };
  tel: string='';
  mess: any;
  num!:string
  alertButtons = ['OK'];
  constructor( private router:Router,private servPaie: PaiementServiceService) {
    addIcons({
      arrowBack
    })
  }

  numComplet():string{
    this.num=this.paiement.codePays+this.tel;
    console.log('le  numero complet est :'+this.num)
    return this.num;
    
  }

  ngOnInit() {
    this.mess;
  }

  verifierLongueur() {
    if (this.tel.length === 8) {
      this.mess='est effectué';
      
      this.savePaie();
      this.router.navigate(['/ticket']);
      
      
    } else {
      this.mess='est refusé'
      this.router.navigate(['/payement-refuser']);
    }

}

  retour() {
    window.history.back();
  }

  savePaie(){
    this.paiement.numeroDeTelephone=this.numComplet();
    this.servPaie.EnregistrerPaiement(this.paiement).subscribe((response)=>{
      
      console.log('enregistrement effectuer ')
    },error=>{
      console.error(error)
    }
    )

  }


}
