import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true // Déclare le pipe comme autonome
})
export class SearchPipe implements PipeTransform {

  // La méthode transform applique la logique de filtrage
  transform(items: any[], searchText: string): any[] {
    // Si la liste des éléments est vide, retourne un tableau vide
    if (!items) return [];
    // Si le texte de recherche est vide, retourne la liste originale des éléments
    if (!searchText) return items;

    // Convertit le texte de recherche en minuscules pour une comparaison insensible à la casse
    searchText = searchText.toLowerCase();
    // Filtre les éléments dont le nom contient le texte de recherche
    return items.filter(item => {
      return item.nom.toLowerCase().includes(searchText);
    });
  }
}
