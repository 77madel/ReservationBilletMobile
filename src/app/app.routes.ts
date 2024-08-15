
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/connection/connection.page').then((m) => m.ConnectionPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home%',
    pathMatch: 'full',
  },

  {
    path: 'accueil',
    loadComponent: () => import('./pages/accueil/accueil.page').then( m => m.AccueilPage)
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then( m => m.ProfilPage)
  },
  {
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then( m => m.ProfilPage)
  },
  {
    path: 'update-profil',
    loadComponent: () => import('./pages/update-profil/update-profil.page').then( m => m.UpdateProfilPage)
  },
  {
    path: 'orange-money',
    loadComponent: () => import('./pages/paiement/orange-money/orange-money.page').then( m => m.OrangeMoneyPage)
  },
  {
    path: 'payement-refuser',
    loadComponent: () => import('./pages/paiement/payement-refuser/payement-refuser.page').then( m => m.PayementRefuserPage)
  },
  {
    path: 'connection',
    loadComponent: () => import('./pages/connection/connection.page').then( m => m.ConnectionPage)
  },
  {
    path: 'inscription',
    loadComponent: () => import('./pages/inscription/inscription.page').then( m => m.InscriptionPage)
  },
  {
    path: 'verification',
    loadComponent: () => import('./verification/verification.page').then( m => m.VerificationPage)
  },

  {
    path: 'profil',
    loadComponent: () => import('./pages/profil/profil.page').then( m => m.ProfilPage)
  },
  {
    path: 'reservationvol',
    loadComponent: () => import('./pages/reservation_vol/reservationvol/reservationvol.page').then( m => m.ReservationvolPage)
  },
  {
    path: 'page-details',
    loadComponent: () => import('./pages/reservation_vol/page-details/page-details.page').then( m => m.PageDetailsPage)
  },
  {
    path: 'liste-des-vols',
    loadComponent: () => import('./pages/liste-des-vols/liste-des-vols.page').then( m => m.ListeDesVolsPage)
  },



];
