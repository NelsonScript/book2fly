// import { Injectable } from '@angular/core';
// //import { Observable } from 'rxjs/Observable';
// // import {Http,Headers,RequestOptions }  from '@angular/http';
// import { HttpClient, HttpHeaders  } from '@angular/common/http';
// import 'rxjs/add/operator/map';

// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   authToken;
//   headers;
//   // After login we have already store jwt token on the localstorage
//   constructor(private _http:HttpClient ,private _router:Router) { 
//     this.loadToken();
//     this.headers = new Headers({'Content-Type': 'application/json', 'Authorization': 
//      'Bareer '+this.authToken});
//    }
//    loadToken(){
//      this.authToken = localStorage.getItem('token');
//    }
//   createAuthenticateHeaders(){
//     this.loadToken();
//     // this.options = new RequestOptions({
//     //   'headers':new Headers({
//     //     'Content-Type': 'application/json',
//     //     'authorization':this.authToken
//     //   })
//     // });
//   }

  
//   //  getEmployeeList(userInfo){
//   //   this.createAuthenticateHeaders();
//   //   return this._http.get(this.domain+'/products', {headers:this.headers})
//   //    .map(response => response.json());
//   //  }
//  }
