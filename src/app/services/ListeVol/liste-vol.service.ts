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

  async ListVol(): Promise<any> {
    const url = `${this.apiUrl}/vol/afficher/tout`;
    try{
      const response =  this.http.get<any>(url).toPromise()
      return response;
    }catch(error){
      throw error;
    }
  }

 async getVolById(id: string): Promise<any> {
    return this.http.get<any>(`${this.apiUrl}/vol/afficher/${id}`).toPromise();
  }
}
