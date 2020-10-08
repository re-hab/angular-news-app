import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Constants} from '../defines/app.constants';
import { HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class BaseServicesService {

  constructor(private http: HttpClient) { 
      

  }

  public getNewsList(){
    return this.http.get<any>(Constants.NEWSAPIURL);
  }

  public addComment(name: string, email: string, comment: string){
    let commentRequest ={
      _name: name,
      _email: email,
      _message: comment
    }

    let bodyString = JSON.stringify(commentRequest);
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(Constants.simulationURL, bodyString, {'headers': headers}).pipe(map((res) => {
     //logic added
      }))
    }
  }




