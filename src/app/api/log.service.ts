import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SearchFilters } from '../common/models/search-filters';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) { }
   
    
    listBanks() {
      return this.http.get(`/api/v1/list-banks`)
    }

    searchLogs(filters: SearchFilters) {
      let header = new HttpHeaders();
      header.set('Access-Control-Allow-Origin', '*');

      const params = {
        start_date: filters.start_date,
        end_date: filters.end_date,
        requestor: filters.requestor,
        validator: filters.validator,
      }
      return this.http.post(`/api/v1/search-logs`, params, httpOptions)
    }
}

