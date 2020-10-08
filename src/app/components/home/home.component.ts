import { Component } from '@angular/core';
import {Article} from '../../models/news.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    articles: Article[]=[];
    recentPosts: Article[]=[];
    mostPopular: Article[]=[];
    editorsPicks: Article[]=[];
    trendAcrticles: Article[]=[];
    publicNews: Article[]=[]; 
    
    
    constructor(private route: ActivatedRoute){

    }
    ngOnInit(){

      this.articles = this.route.snapshot.data['news'].articles;      
          this.recentPosts = this.getNArticles(this.articles, 1,4);
          this.mostPopular= this.getNArticles(this.articles, 3,8);
          this.editorsPicks = this.getNArticles(this.articles, 2,6);
          this.publicNews = this.getNArticles(this.articles, 2,5);
          this.trendAcrticles = this.articles;
    }

      getNArticles(arr: Article[], from: number, to: number){
        return arr.slice(from, to);

      }
  

}