import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../../models/news.interface';
import {Constants} from '../../defines/app.constants'

import * as moment from 'moment';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  @Input() posts: Article[]=[];

  constructor(private constants: Constants) { }

  ngOnInit(): void {
  }

  formatPublishedDate(publshdDate: any){
    return `${moment(new Date(publshdDate)).format("MMMM")} ${moment(new Date(publshdDate)).day()}, ${moment(new Date(publshdDate)).year()}`;
  }


}
