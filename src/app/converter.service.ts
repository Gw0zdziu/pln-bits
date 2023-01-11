import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {nbpModel} from './models/model';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private urlNBP: string = 'https://api.nbp.pl/api/exchangerates/rates/a/eur?format=json'
  constructor(private http: HttpClient) { }

  convertPlnToBits(): Observable<nbpModel>{
    return this.http.get<nbpModel>(this.urlNBP)
  }
}


