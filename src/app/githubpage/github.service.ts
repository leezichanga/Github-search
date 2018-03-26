// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class GithubService {
//
//   constructor() { }
//
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../../environments/environment'

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
    private api_key:string =   'c3df935048e38ca15e5a3d12b1ef514e4748cd70';

  constructor(private _http:HttpClient) {
    this.username = 'leezichanga';

   }

   getUser(){
    return this._http.get('https://api.github.com/users/' +this.username + '?access_token=' + this.api_key)
    .map(result => result);
   }

   getRepos(){
    return this._http.get('https://api.github.com/users/'+ this.username + '/repos' + '?access_token=' + this.api_key)
    .map(result => result);
   }

   updateUser(username:string){
    this.username = username;
   }

};
