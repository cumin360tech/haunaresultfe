import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  reqHeaders: any = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'token': `${localStorage.getItem('token')}`
  });

  API = environment.API_URL;
  constructor(private http: HttpClient) {
  }

  getResults(registerNo: any) {
    return this.http.get(`${this.API}/result?reg_no=${registerNo}`, { headers: this.reqHeaders, observe: 'response' })
  }

  getResults2(registerNo: any) {
    return this.http.get(`${this.API}/result2?reg_no=${registerNo}`, { headers: this.reqHeaders, observe: 'response' })
  }


  upload(file: any) {
    return this.http.post(`${this.API}/publishResult`, file)
  }

  append(file: any) {
    return this.http.post(`${this.API}/appendResult`, file)
  }

  upload2(file: any) {
    return this.http.post(`${this.API}/publishResult2`, file)
  }

  append2(file: any) {
    return this.http.post(`${this.API}/appendResult2`, file)
  }

}
