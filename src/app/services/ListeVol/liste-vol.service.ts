import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Notificat} from "../../pages/notification/notification.service";

@Injectable({
  providedIn: 'root'
})
export class ListeVolService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) { }

  // get(): Observable<any> {
  //   const headers = new HttpHeaders(
  //     {
  //       'Content-Type': 'application/json' ,
  //       'Authorization': 'Bearer ' + localStorage.getItem('token')
  //     }
  //   );
  //   return this.http.get(`${this.apiUrl}/vol/afficher`, {headers});
  //
  // }

  async ListVol(): Promise<any> {
    const url = `${this.apiUrl}/vol/afficher`;
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${jwtToken}`
    // })
    try{
      const response =  this.http.get<any>(url).toPromise()
      return response;
    }catch(error){
      throw error;
    }
  }
}
