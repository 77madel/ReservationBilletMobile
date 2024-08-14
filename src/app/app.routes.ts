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
    path: 'ticket',
    loadComponent: () => import('./pages/Tickets/ticket/ticket.page').then( m => m.TicketPage)
  },


];
