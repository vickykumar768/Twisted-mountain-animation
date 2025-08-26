import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../models/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private https:HttpClient) { }

   getJsonData(userInfo:UserInfo[]){
    return this.https.get<UserInfo[]>('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
  }
}
