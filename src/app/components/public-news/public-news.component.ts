import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../../models/news.interface';
import {Constants} from '../../defines/app.constants'
import * as moment from 'moment';

@Component({
  selector: 'app-public-news',
  templateUrl: './public-news.component.html',
  styleUrls: ['./public-news.component.scss']
})
export class PublicNewsComponent implements OnInit {

  @Input() posts: Article[]=[];
  shares: number;
  comments: number;

  constructor(private constants: Constants) { }

  ngOnInit(): void {
    this.shares = Constants.generateNumber();
    this.comments = Constants.generateNumber();
  }

  formatPublishedDate(publshdDate: any){
    return `${moment(new Date(publshdDate)).format("MMMM")} ${moment(new Date(publshdDate)).day()}, ${moment(new Date(publshdDate)).year()}`;
  }

}
