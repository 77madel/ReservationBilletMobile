import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonAvatar, IonInput, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { arrowBackCircleOutline, createOutline, eye } from 'ionicons/icons';
import { LoginServiceService } from 'src/app/services/login-service.service';
@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.page.html',
  styleUrls: ['./update-profil.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonItem, IonInput, IonAvatar, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UpdateProfilPage implements OnInit {


  prenom: string | undefined;
  nom: string | undefined;
  id: string | undefined;
  email: string | undefined;
  numero: string | undefined;
  adresse: string | undefined;

  constructor(private servLogin:LoginServiceService) { 

    addIcons({eye,createOutline, arrowBackCircleOutline})
  }
 

  ngOnInit() {

    this.userConnecter();
  }

  userConnecter(){
    const usrCnt=this.servLogin.getUtilisateur();
    this.id=usrCnt.username.id;
    this.nom=usrCnt.username.nom;
    this.prenom=usrCnt.username.prenom;
    this.email=usrCnt.username.email;
    this.adresse=usrCnt.username.adresse;
  }

  retour():void{
    window.history.back();
  }

}
