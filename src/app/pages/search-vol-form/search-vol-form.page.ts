import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from "@ionic/angular";
import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowDownOutline, arrowUpOutline, calendarOutline } from 'ionicons/icons';
import { ReservationVolService } from 'src/app/services/reservationVol/reservation-vol.service';
import { SearchFormService } from "../../services/search-form/search-form.service";

@Component({
  selector: 'app-search-vol-form',
  templateUrl: './search-vol-form.page.html',
  styleUrls: ['./search-vol-form.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class SearchVolFormPage implements OnInit {
  dateDepart!: string;
  dateDeRetour!: string;
  classes!: string[];
  selectedTab!: number;
  showRetour!: boolean;
  searchValue = '';

  villeDeDepart: string = "";
  villeDArrivee: string = "";
  filteredVilleDepart: { nom: string }[] = [];
  listOfVille: any[]=[] ;
  filteredVilleDArrivee: { nom: string }[] = [];
  voyageur: number = 0;
  selectedClass: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceSearch: SearchFormService,
    private reservationService: ReservationVolService, // Injection du service de réservation
  ) {
    this.route.params.subscribe(params => {
      this.searchValue = params['searchValue'];
      console.log('Hello '+params['searchValue'])
    });

    this.selectedTab = 1;
    this.showRetour = false;

    addIcons({
      arrowDownOutline,
      arrowUpOutline,
      calendarOutline,
      arrowBackOutline,
    });
  }

  ngOnInit() {
    this.classes = ["Economique", "Affaire"];
    //this.villeDArrivee = "";

    // Récupération des villes depuis le service
    this.serviceSearch.ListVille().then((res: { nom: string }[]) => {
      this.listOfVille = res;
      console.log(this.listOfVille[1].pays.nom);
    });

    // Assurez-vous de ne pas appeler `Listville` si vous utilisez `subscribe` pour récupérer les villes
  }

  filterVilleDepart(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredVilleDepart = this.listOfVille.filter(item => {
      return item.nom.toLowerCase().includes(query); // Accès à la propriété nom
    });
  }

  filterVilleDArrivee(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredVilleDArrivee = this.listOfVille.filter(item => {
      return item.nom.toLowerCase().includes(query); // Accès à la propriété nom
    });
  }

  selectedItemVille(item: { nom: string }) {
    this.villeDeDepart = item.nom;
    this.filteredVilleDepart =  []  ;
    console.log("filteredVilleDepart", this.filteredVilleDepart.length)
  }

  selectedItem2(item: { nom: string }) {
    this.villeDArrivee = item.nom;
    this.filteredVilleDArrivee = [];
  }

  onTabItemClick(i: number) {
    this.selectedTab = i;
    this.showRetour = i === 2;
  }

  switchPays() {
    let temp = this.villeDeDepart;
    this.villeDeDepart = this.villeDArrivee;
    this.villeDArrivee = temp;
  }

  continuer() {
    this.router.navigate(['/liste-des-vols', {
      villeDeDepart: this.villeDeDepart,
      villeDArrivee: this.villeDArrivee,
      dateDepart: this.dateDepart,
      dateDeRetour: this.dateDeRetour,
      voyageur: this.voyageur,
      classe: this.selectedClass
    }]);
  }

  isValid() {
    return this.villeDeDepart && this.villeDArrivee && this.dateDepart && this.voyageur && this.selectedClass;
  }

  retour(): void {
    window.history.back();
  }

}


