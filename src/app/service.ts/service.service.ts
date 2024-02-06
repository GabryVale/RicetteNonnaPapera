import { Injectable } from '@angular/core';
import { Ricette } from '../class/ricette';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../class/user';
import { Ricetta } from '../class/ricetta';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  ricettaSelected: Ricetta | undefined
  idRicettaDelete: number = 0
  idRicettaDeleteLista: number = 0
  idRicetta: number=0
  dialog: any
  token: any = ""
  tokenString: string = "";
  constructor(private http: HttpClient) { }
  isAdmin: boolean = false;
  isLogged: boolean = false;
  form: boolean = false;
  apiUrl: string = 'http://localhost:8080/';
  
  getDati(): Observable<any> {
    return this.http.get(this.apiUrl + "api/ricette/lista", { responseType: 'text' });
  }

  getDetailPage(id: number): Observable<any> {
    return this.http.get(this.apiUrl + "api/ricette/get/" + id, { responseType: 'text' })
  }

  ricerca(titolo: string): Observable<any> {
    return this.http.get(this.apiUrl + "api/ricette/search?titolo=" + titolo);
  }

  crezioneRicetta(ricetta: any) {
    this.token = localStorage.getItem("JwtAccess-Token");
    this.tokenString = JSON.parse(this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenString
      })
    };
    return this.http.post(this.apiUrl + "api/ricette/crea-ricetta", ricetta, httpOptions);
  }

  delete(id: any) {
    this.token = localStorage.getItem("JwtAccess-Token");
    this.tokenString = JSON.parse(this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenString
      })
    };
    return this.http.delete(this.apiUrl + "api/ricette/delete/" + id, httpOptions);
  }

  login(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.apiUrl + "api/auth/signin", user, httpOptions)
  }

  edit(ricetta: any){
    this.token = localStorage.getItem("JwtAccess-Token");
    this.tokenString = JSON.parse(this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenString
      })
    };
    return this.http.put(this.apiUrl+ "api/ricette/update/"+this.idRicetta, ricetta, httpOptions);
  }

  listaCategorie(){
    return this.http.get(this.apiUrl + "api/categorie/lista", { responseType: 'text' })
  }

  listaPreferiti(){
    this.token = localStorage.getItem("JwtAccess-Token");
    this.tokenString = JSON.parse(this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenString,
      })
    };
    return this.http.get(this.apiUrl + "api/utenti/favorites", httpOptions)
  }

  addRicettaPreferiti(id: number){
    this.token = localStorage.getItem("JwtAccess-Token");
    this.tokenString = JSON.parse(this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenString,
      })
    };
    return this.http.post(this.apiUrl + "api/utenti/favorites/"+ id + "/add","id", httpOptions)
  }

  deleteRicettaPreferiti(id: number){
    this.token = localStorage.getItem("JwtAccess-Token");
    this.tokenString = JSON.parse(this.token)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenString
      })
    };
    return this.http.delete(this.apiUrl + "api/utenti/favorites/" + id + "/remove", httpOptions)
  }
}