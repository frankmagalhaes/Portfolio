import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bio } from '../models/bio';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  constructor(private htttp: HttpClient) { }

  getBio() {
    return this.htttp.get<Bio>('assets/json/bio.json');
  }
}
