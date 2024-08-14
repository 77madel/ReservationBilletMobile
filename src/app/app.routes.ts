import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
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
    path: 'notification',
    loadComponent: () => import('./pages/notification/notification.page').then(m => m.NotificationPage)
  },  {
    path: 'mot-passe-oublie',
    loadComponent: () => import('./pages/mot-passe-oublie/mot-passe-oublie.page').then( m => m.MotPasseOubliePage)
  },
  {
    path: 'inscription-reussie',
    loadComponent: () => import('./pages/inscription-reussie/inscription-reussie.page').then( m => m.InscriptionReussiePage)
  },




];
