import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'


@Injectable()

export class HttpServiceService {


  

 

  constructor(private router: Router, private httpClient: HttpClient) {
    console.log('in http service');

  }
  

  get(endpoint: any, callback: any  ) {
    console.log('in http service GET method')
    return this.httpClient.get(endpoint).subscribe((data) => {
      console.log('Data :: ' + data);
      callback(data);

    });
  }

  post(endpoint : any, bean: any, callback: any) {
    console.log('in http service POST method')
    
    console.log('before http service doPost method')
    return this.httpClient.post(endpoint, bean).subscribe((data) => {
      console.log('data ==', data);
      callback(data);

    }, error => {
      console.log('ORS Error--', error);
    });
  }
}