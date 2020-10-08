import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/news.interface';
import {Constants} from '../../defines/app.constants'

import * as moment from 'moment';


@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {

  @Input() posts: Article[] = [];

  constructor(private constants: Constants) { }

  ngOnInit(): void {

  }

  formatPublishedDate(publshdDate: any) {
 
      return `${moment(new Date(publshdDate)).format('LT')} on ${moment(new Date(publshdDate)).format("MMM")} ${moment(new Date(publshdDate)).day()}`;

    }
}
