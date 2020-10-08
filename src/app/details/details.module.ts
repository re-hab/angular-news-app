import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './show-details/details.component';
import { AddCommentComponent} from './add-comment/add-comment.component';
import { CommentComponent } from './comment/comment.component'

import { DetailsRoutingModule } from './details-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DetailsComponent,
    AddCommentComponent,
    CommentComponent

  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    FormsModule,
  ],
})
export class DetailsModule { }
