import { Component, OnInit } from '@angular/core';
import {SocialMediaButtons} from '../../models/news.interface'

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  socialMediaButtons: SocialMediaButtons[]=[]
  constructor() { }

  ngOnInit(): void {

 this.socialMediaButtons = [
  {
    class: 'fab fa-facebook-f',
    bgColor: '#3d5b9b'
  },
  {
    class: 'fab fa-twitter',
    bgColor: '#20c0f0'
  },
  {
    class: 'fab fa-google-plus-g',
    bgColor: '#d01413'
  },
  {
    class: 'fab fa-youtube',
    bgColor: '#e04a32'
  },
  {
    class: 'fab fa-linkedin-in',
    bgColor: '#017cb8'
  },
  {
    class: 'fab fa-tumblr',
    bgColor: '#2d4865'
  }
];
  }



}
