import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../../models/news.interface';
import {Constants} from '../../defines/app.constants'

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit {

  @Input() posts: Article[]=[];

  constructor(private constants: Constants) { }

  ngOnInit(): void {
    
  }

  

}
