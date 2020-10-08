import { Component, OnInit,Input } from '@angular/core';
import {Article} from '../../models/news.interface'
import * as moment from 'moment';
import {Constants} from '../../defines/app.constants'

@Component({
  selector: 'app-editors-picks',
  templateUrl: './editors-picks.component.html',
  styleUrls: ['./editors-picks.component.scss']
})
export class EditorsPicksComponent implements OnInit {

  @Input() posts: Article[]=[];

  constructor(private constants: Constants) { }

  ngOnInit(): void {
  }


  formatPublishedDate(publshdDate: any){
    return  moment(new Date(publshdDate)).startOf('day').fromNow(); 
  }

}
