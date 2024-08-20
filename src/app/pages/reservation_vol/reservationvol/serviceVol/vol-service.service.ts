import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolServiceService {
  baseUrl= 'http://localhost:8080';

  constructor(private http:HttpClient) { }

    getVol(name:string):Observable<any>{
      return this.http.get(`${this.baseUrl}/${name}/afficher`)
    }


}
