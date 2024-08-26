
import { Routes } from '@angular/router';
import { GuardAuthentificationService } from './services/guard-authentification.service';
export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/connection/connection.page').then((m) => m.ConnectionPage),
  },

  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full',
  },

  {
    path: 'splash-screen',
    loadComponent: () => import('./splash-screen/splash-screen.page').then( m => m.SplashScreenPage)
  },

  {
    path: 'accueil',
    loadComponent: () => import('./pages/accueil/accueil.page').then( m => m.AccueilPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full',
  },
  // {
  //   path: 'profil',
  //   loadComponent: () => import('./pages/profil/profil.page').then( m => m.ProfilPage),
  //   canActivate:[GuardAuthentificationService]
  // },
  {
    path: 'inscription-reussie',
    loadComponent: () => import('./pages/inscription-reussie/inscription-reussie.page').then( m => m.InscriptionReussiePage)
  },
  {
    path: 'notification/:id',
    loadComponent: () => import('./pages/notification/notification.page').then( m => m.NotificationPage)
  },
  {
    path: 'mot-de-passe-oublie',
    loadComponent: () => import('./pages/mot-passe-oublie/mot-passe-oublie.page').then( m => m.MotPasseOubliePage)
  },
  {
    path: 'ticket',
    loadComponent: () => import('./pages/Tickets/ticket/ticket.page').then( m => m.TicketPage)

  },
  {
    path: 'home1',
    loadComponent: () => import('./home1/home1.page').then( m => m.Home1Page)
  },
  {
    path: 'chargement',
    loadComponent: () => import('./chargement/chargement.page').then( m => m.ChargementPage)
  },
  {
    path: 'chargement1',
    loadComponent: () => import('./chargement1/chargement1.page').then( m => m.Chargement1Page)
  },
  {
    path: 'chargement2',
    loadComponent: () => import('./chargement2/chargement2.page').then( m => m.Chargement2Page)
  },
  {
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then( m => m.ProfilPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: 'update-profil',
    loadComponent: () => import('./pages/update-profil/update-profil.page').then( m => m.UpdateProfilPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: 'orange-money',
    loadComponent: () => import('./pages/paiement/orange-money/orange-money.page').then( m => m.OrangeMoneyPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: 'payement-refuser',
    loadComponent: () => import('./pages/paiement/payement-refuser/payement-refuser.page').then( m => m.PayementRefuserPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: 'inscription',
    loadComponent: () => import('./pages/inscription/inscription.page').then( m => m.InscriptionPage),
  },
  {
    path: 'verification',
    loadComponent: () => import('./verification/verification.page').then( m => m.VerificationPage),
    canActivate:[GuardAuthentificationService]
  },

  {
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then( m => m.ProfilPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: 'reservationvol',
    loadComponent: () => import('./pages/reservation_vol/reservationvol/reservationvol.page').then( m => m.ReservationvolPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: 'page-details',
    loadComponent: () => import('./pages/reservation_vol/page-details/page-details.page').then( m => m.PageDetailsPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: 'liste-des-vols',
    loadComponent: () => import('./pages/liste-des-vols/liste-des-vols.page').then( m => m.ListeDesVolsPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: 'search-vol-form',
    loadComponent: () => import('./pages/search-vol-form/search-vol-form.page').then( m => m.SearchVolFormPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: 'vol-selectionner/:id',
    loadComponent: () => import('./pages/vol-selectionner/vol-selectionner.page').then( m => m.VolSelectionnerPage),
    canActivate:[GuardAuthentificationService]
  },
  
  {
    path: 'classe-economique/:id',
    loadComponent: () => import('./pages/classe-economique/classe-economique.page').then( m => m.ClasseEconomiquePage)
  },

  {
    path: 'classe-affaire/:id',
    loadComponent: () => import('./pages/classe-affaire/classe-affaire.page').then( m => m.ClasseAffairePage)

  },
  {
    path: 'InformationPassagerPage',
    loadComponent: () => import('./pages/information-passager/information-passager.page').then( m => m.InformationPassagerPage)
  },
  {
    path: 'InformationPassagerPage/:id',
    loadComponent: () => import('./pages/information-passager/information-passager.page').then( m => m.InformationPassagerPage)

  }


];
