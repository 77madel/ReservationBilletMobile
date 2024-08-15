
import { Routes } from '@angular/router';
import { GuardAuthentificationService } from './services/guard-authentification.service';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/connection/connection.page').then((m) => m.ConnectionPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'accueil',
    loadComponent: () => import('./pages/accueil/accueil.page').then( m => m.AccueilPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then( m => m.ProfilPage),
    canActivate:[GuardAuthentificationService]
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
    path: 'connection',
    loadComponent: () => import('./pages/connection/connection.page').then( m => m.ConnectionPage),
    canActivate:[GuardAuthentificationService]
  },
  {
    path: 'inscription',
    loadComponent: () => import('./pages/inscription/inscription.page').then( m => m.InscriptionPage),
    canActivate:[GuardAuthentificationService]
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



];
