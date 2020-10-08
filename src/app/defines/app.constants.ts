import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/news.interface';
import { environment } from '../../environments/environment';
import * as moment from 'moment';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class Constants {

    constructor(public router: Router){

    }

    public static NEWSAPIURL = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey="+ environment.apiKey;


    public static generateNumber(): number {
        return Math.floor(Math.random() * 500 + 1);
    }

  public static getRandomDate() {
    return `${moment(new Date()).format("MMMM")} ${moment(new Date()).day()}, ${moment(new Date()).year()}`;
  }

  public static getCurrentDate() {
    return `${moment().format("MMMM")} ${moment().format("DD")}, ${moment().format("YYYY")}`;
  }

  public static get simulationURL(){
    return '';
  }
    public showDetails(newsItem : Article){

      this.router.navigate([`/details/${newsItem.source.id}`], {
        state: {
          data: {
            item: newsItem
          }
        }
      });
    }
}