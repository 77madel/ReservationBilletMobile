import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VilleServiceService {

  constructor(private http:HttpClient) {}

  getVille(){
    return this.http.get("")
  }
}
