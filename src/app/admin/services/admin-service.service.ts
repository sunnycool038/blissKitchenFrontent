import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable,throwError } from 'rxjs';
import { TestUser, User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpClient:HttpClient) { }

  public getPost():Observable<any>{
    let mongoUrl:string ='http://localhost:5000/api/books';
    return this.httpClient.get<any>(mongoUrl).pipe(
      catchError(this.handleError)
    );
  }

  public Post(body:any):Observable<any>{
    let baseUrl:string = 'https://jsonplaceholder.typicode.com/users';
    let mongoUrl:string ='http://localhost:5000/api/books'
    return this.httpClient.post<any>(mongoUrl,body).pipe(
      catchError(this.handleError)
    );
  }

  

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
