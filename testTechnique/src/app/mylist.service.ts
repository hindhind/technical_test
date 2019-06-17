import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MylistService {

  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc');

  }
}
