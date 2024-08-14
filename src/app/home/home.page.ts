import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
//import {ToastrModule, ToastrService} from "ngx-toastr";
import {AuthService} from "../Services/auth.service";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {
  ListNotificationsComponent
} from "../pages/notification/listNotification/list-notifications/list-notifications.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonTabButton, IonIcon, IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, NgOptimizedImage, ListNotificationsComponent]
})
export class HomePage implements OnInit{

  /* credentials =
     { };*/
  username: String = 'babou@example.com';
  password: String = '1234';
  isConnected: boolean = false;

  ngOnInit(): void {
    this.isConnected = !localStorage.getItem('currentUser');
    this.login();
  }

  message = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    //private toastr: ToastrService,
  ){}

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      localStorage.setItem("currentUser", JSON.stringify(response));
      this.router.navigate(['/accueil']);
      //this.toastr.success("Connection reussi avec succès", "Success")
      this.username = '';
      this.password = '' ;

    }, error => {
      //this.toastr.error("Username ou MotDePasse incorrect")
      this.message = 'Invalid username or password';
      this.username = '';
      this.password = '' ;
    });
  }


  logo1: string = "assets/images/logoToolbar.png";
  person: string ="assets/images/person.png";
  eyes: string ="assets/images/eye.png";


}
