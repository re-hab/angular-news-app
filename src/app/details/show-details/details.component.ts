import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/news.interface';
import {Constants} from '../../defines/app.constants'

import * as moment from 'moment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  newsItem: any;
  socialMediaIcons: Array<Object>;
  shares: number;
  comments: any[]=[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    if (window.history.state.data) {
      this.newsItem = window.history.state.data.item;

    } else {
      //   this.newsItem = {
      //     source: {
      //       id: 'Not Available',
      //       name: 'Not Available'
      //     },
      //     author: 'Not Available',
      //     title: 'Not Available',
      //     description: 'Not Available',
      //     url: 'Not Available',
      //     urlToImage: 'Not Available',
      //     publishedAt: 'Not Available',
      //     content: 'Not Available',

      // }

      this.router.navigate(['/']);

    }

    this.shares = Constants.generateNumber();

    this.socialMediaIcons = [
      {
        class: 'fas fa-envelope',
        name: 'Email'
      },
      {
        class: 'fab fa-facebook-f',
        name: 'Facebook'
      },
      {
        class: 'fab fa-twitter',
        name: 'Twitter'
      },
      {
        class: 'fas fa-share',
        name: 'More'
      }
    ];

    this.comments.unshift({
      name: 'Oyla',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur turpis urna. Vestibulum congue ipsum sed mi commodo tempor. Donec luctus at nisl sed ornare. Phasellus ornare diam urna',
      time: Constants.getRandomDate()
    })

  }

  formatPublishedDate(publshdDate: any) {
    return `${moment(new Date(publshdDate)).format("MMMM")} ${moment(new Date(publshdDate)).day()}, ${moment(new Date(publshdDate)).year()}`;
  }


  addComment(comment: any){
    this.comments.push(comment)
  }

}
