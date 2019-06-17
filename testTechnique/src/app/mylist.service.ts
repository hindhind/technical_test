import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MylistService {
  pager: number = 1;
  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc');

  }
  getPagination(pager) {
    return this.http.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=' + pager);

  }
}
