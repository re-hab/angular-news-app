import { Injectable } from '@angular/core';
import {BaseServicesService} from '../../app/services/baseSrvices.service';
import { Resolve } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class Newsesolver implements Resolve<any>  {
  constructor(private newsService: BaseServicesService) {}

  resolve(): Observable<any> {
    return this.newsService.getNewsList().pipe(
      catchError((e) => {
        console.log(e)
        return EMPTY;
      }));
  }
}

//     resolve() {
//         return this.lookupsService.getAvailableTrees().map((res) => {
//             if(!res.success) {
//                 this.router.navigate([Constants.errorRoute]);
//                 return Observable.throw('Request Error');
//             }
//             return res.availableTrees;
//         }).first();
//     }
// }
