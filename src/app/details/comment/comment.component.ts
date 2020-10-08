import { Component, OnInit, Input } from '@angular/core';
import {Constants} from '../../defines/app.constants'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  time: any;
  imagePath: string;
  @Input() comments: any[]=[]
  constructor() { }

  ngOnInit(): void {
    this.imagePath ='../../../assets/images/person.png'
  }

}
