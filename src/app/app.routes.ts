
import { Routes } from '@angular/router';
import {InscriptionReussiePage} from "./pages/inscription-reussie/inscription-reussie.page";
import {NotificationPage} from "./pages/notification/notification.page";
import {MotPasseOubliePage} from "./pages/mot-passe-oublie/mot-passe-oublie.page";

export const routes: Routes = [
  {
    path: 'splash-screen',
    loadComponent: () => import('./splash-screen/splash-screen.page').then( m => m.SplashScreenPage)
  },

  {
    path: 'accueil',
    loadComponent: () => import('./pages/accueil/accueil.page').then( m => m.AccueilPage)
  },
  {
    path: '',
    redirectTo: 'splash-screen',
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
  {
    path: 'ticket',
    loadComponent: () => import('./pages/Tickets/ticket/ticket.page').then(m => m.TicketPage)
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

];
