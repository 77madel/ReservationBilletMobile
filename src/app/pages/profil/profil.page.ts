import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonIcon, IonTabButton, IonTabBar, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { airplane, chevronForwardOutline, exitOutline, helpCircleOutline, home, library, lockClosedOutline, lockOpenOutline, logOutOutline, notifications, person, personOutline, playCircle, radio, search, settingsOutline } from 'ionicons/icons';

import { addIcons } from 'ionicons'
import { RouterLink } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonIcon,RouterLink]
})
export class ProfilPage implements OnInit {
  prenom: string | undefined;
  nom: string | undefined;
  id: string | undefined;
  constructor(private servLogin:LoginServiceService) {
    addIcons({ library, playCircle, radio, search,home,
      airplane,notifications,person,helpCircleOutline,settingsOutline,exitOutline,
      lockOpenOutline,chevronForwardOutline,lockClosedOutline,logOutOutline});
   }

  ngOnInit() {
    // this.servLogin.get("vol").subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // })
this.userConnecter();
    
  }

  
  userConnecter(){
    const usrCnt=this.servLogin.getUtilisateur();
    this.id=usrCnt.username.id;
    this.nom=usrCnt.username.nom;
    this.prenom=usrCnt.username.prenom;
  }


  

  deconnecter(){
    this.servLogin.logout();
  }


}
