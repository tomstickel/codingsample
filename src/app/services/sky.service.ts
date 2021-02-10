import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import {repos} from '../repos';



@Injectable({
  providedIn: 'root'
})
export class SkyService {

  constructor(private http: HttpClient) { }

  baseURL: string = "https://api.github.com/";

  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  }

  

}
