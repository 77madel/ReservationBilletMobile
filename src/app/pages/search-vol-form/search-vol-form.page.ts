import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dateoperation } from 'src/app/Utils/dateOperation';
import { addIcons } from 'ionicons';
import {arrowBackOutline, arrowDownOutline, arrowUpOutline, calendarOutline} from 'ionicons/icons';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-search-vol-form',
  templateUrl: './search-vol-form.page.html',
  styleUrls: ['./search-vol-form.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class SearchVolFormPage implements OnInit {
  paysDeDepart!: string;
  paysArrive!: string;
  dateDepart!: String;
  dateDeRetour!: string;
  voyageur!: number;
  classes!: string[];
  selectedTab!: number;
  listOfPays!: string[];
  filteredPaysDepart: string[] = [];
  filteredPaysDArrivee: string[] = [];
  showRetour!: boolean;
  searchValue='';


  constructor(private route: ActivatedRoute,private router:Router) {

    this.route.params.subscribe(params => {
      this.searchValue = params['searchValue'];})

    this.listOfPays = ["Mali", "Namibie", "Burkina", "France"]


    this.selectedTab = 1;
    this.showRetour = false;
    addIcons({
      arrowDownOutline,
      arrowUpOutline,
      calendarOutline,
      arrowBackOutline,
    })
  }

  ngOnInit() {
    this.paysDeDepart = "";
    this.dateDepart = Dateoperation.formatTodayDate();
    this.dateDeRetour = Dateoperation.formatTodayDate();
    this.voyageur = 1;
    this.classes = ["Economique", "Affaire"]

    this.route.queryParams.subscribe(
      params => {
        console.log(params);
        this.paysArrive = ""; // Assigner params
      }
    )
  }

  filterPaysDepart(event: any){
    const query = event.target.value.toLowerCase();

    this.filteredPaysDepart = this.listOfPays.filter(item => {
      return item.toLowerCase().indexOf(query) > -1;
    })
  }
  filterPaysDArrivee(event: any) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    this.filteredPaysDArrivee = this.listOfPays.filter(item => {
      return item.toLowerCase().indexOf(query) > -1;
    })
  }

  selectedItem(item: string) {
    this.paysDeDepart = item;
    this.filteredPaysDepart = [];
  }

  selectedItem2(item: string) {
    this.paysArrive = item;
    this.filteredPaysDArrivee = [];
  }





  onTabItemClick(i: number){
    this.selectedTab = i;
    this.showRetour = i == 2;
  }

  switchPays() {
    let temp = this.paysDeDepart;
    this.paysDeDepart = this.paysArrive;
    this.paysArrive = temp;
  }

  continuer() {
    this.router.navigate(['/liste-des-vols', {
      paysDeDepart: this.paysDeDepart,
      searchValue: this.searchValue,
      dateDepart: this.dateDepart,
      dateDeRetour: this.dateDeRetour
    }]);

}
}

