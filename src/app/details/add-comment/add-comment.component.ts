import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {BaseServicesService} from '../../../app/services/baseSrvices.service';
import {Constants} from '../../defines/app.constants';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  user_name: string;
  user_email: string;
  user_message: string;
  errorMessage: string;
  showError: boolean = false;

  constructor(private news: BaseServicesService) { }

  @Output() onAddComment:  EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
     }

  resetShowError() {
    this.showError = false;
  }
  
  onSubmit(form: any) {

    if (!form.valid) {
      this.showError = true;
      this.errorMessage = 'Please fill in all the fields to continue';
      return;
    }

      this.onAddComment.emit({
          name: this.user_name,
          message: this.user_message,
          time: Constants.getCurrentDate()
        });

    this.news.addComment(this.user_name, this.user_email, this.user_message).subscribe(
      (result) => {
        // this.onAddComment.emit({
        //   name: this.user_name,
        //   message: this.user_message,
        //   time: Constants.getRandomDate()
        // });
        form.reset();

      },
      (error) => {
        this.showError = true;
        this.errorMessage = 'Could not connect to server';
      });
  }




}

