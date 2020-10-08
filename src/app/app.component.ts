import { Component } from '@angular/core';
import {BaseServicesService} from '../app/services/baseSrvices.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pam-news';


  constructor() { 
  }

  openSite(){
    window.open('https://newsapi.org/', '_blank')
  }
 
}
