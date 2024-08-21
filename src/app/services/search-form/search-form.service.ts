import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  async ListVol(): Promise<any> {
    const url = `${this.apiUrl}/vol/afficher/tout`;
    try{
      const response =  this.http.get<any>(url).toPromise()
      return response;
    }catch(error){
      throw error;
    }
  }

  async ListVille(): Promise<any> {
    const url = `${this.apiUrl}/ville/afficher/tout`;
    try{
      const response =  this.http.get<any>(url).toPromise()
      return response;
    }catch(error){
      throw error;
    }
  }

}
