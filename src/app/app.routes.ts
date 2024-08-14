import { Routes } from '@angular/router';

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

];
