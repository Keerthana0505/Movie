import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, mergeMap } from 'rxjs';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { Movie } from './movie-list/movie-list.component';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
   userdata=' ';
  constructor( private http: HttpClient) {}
  getMovie()
  {
    return this.http.get(
        `https://648a959a17f1536d65e95003.mockapi.io/movies`)
  }
  deleteMovie(id: string) {
    console.log('deleting', id);
    return this.http
      .delete(`https://648a959a17f1536d65e95003.mockapi.io/movies/${id}`);
   
  }
  addMovie(value:Movie){
    return this.http.post(
      `https://648a959a17f1536d65e95003.mockapi.io/movies`,value).pipe(concatMap(()=>this.getMovie()));
  }
  delgetMovie(id:string){
    return this.deleteMovie(id).pipe(concatMap(()=>this.getMovie()));
  }
  getMovieById(id: string) {
    return this.http
    .get<Movie>(`https://60c98aa8772a760017203b57.mockapi.io/movies/${id}`)
    .pipe(catchError((err) => []));

  }
}
