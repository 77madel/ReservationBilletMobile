import { Routes } from '@angular/router';
import {InscriptionReussiePage} from "./pages/inscription-reussie/inscription-reussie.page";
import {NotificationPage} from "./pages/notification/notification.page";
import {MotPasseOubliePage} from "./pages/mot-passe-oublie/mot-passe-oublie.page";

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
    path: 'inscription-reussie',
    loadComponent: () => import('./pages/inscription-reussie/inscription-reussie.page').then( m => m.InscriptionReussiePage)
  },
  {
    path: 'notification',
    loadComponent: () => import('./pages/notification/notification.page').then( m => m.NotificationPage)
  },
  {
    path: 'mot-de-passe-oublie',
    loadComponent: () => import('./pages/mot-passe-oublie/mot-passe-oublie.page').then( m => m.MotPasseOubliePage)
  },



];
