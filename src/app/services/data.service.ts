import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
      .pipe(
        map(response => response),
        catchError(this.hadleError)
      );
  }

  create(resource: any){
    return this.http.post(this.url, resource)
      .pipe(
        map(response => response),
        catchError(this.hadleError)
      );
  }

  update(resource: any){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRed: true}))
      .pipe(
        map(response => response),
        catchError(this.hadleError)
      );
  }

  delete(id: any){
    return this.http.delete(this.url + '/' + id)
      .pipe(
        map(response => response),
        catchError(this.hadleError)
      );
  }

  private hadleError(error: Response){
    if(error.status === 400){
      return throwError(new BadInput(error.json()));
    }
    if(error.status === 404){
      return throwError(new NotFoundError());
    }
    else{
      return throwError(new AppError(error));
    }
  }
}
