import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../movies.service';
export interface Movie {
  id: string;
  name: string;
  poster: string;
  rating: number;
  summary: string;
  trailer: string;
}
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {

  movieForm = this.formBuilder.group({
    name: ['', Validators.required],
    poster: ['', Validators.required], // poster: ['', Validators.pattern('^https|http?://.+')],
    rating: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
    summary: ['', Validators.required],
  });
  httpClient: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private movieService:MoviesService) {}

  movieList$: any;
  trackByFn( index:any,mv:any) {
    return mv.id;
  }

  ngOnInit() {
    this.movieList$ = this.movieService.getMovie();
    
    
  }
  addMovie() {
    this.movieList$=this.movieService.addMovie(this.movieForm.value as any);
    
  }
  // getMovie()
  // {
  //   return this.http.get(
  //       `https://648a959a17f1536d65e95003.mockapi.io/movies`)
  // }
  // deleteMovie(id: string) {
  //   console.log('deleting', id);
  //   return this.http
  //     .delete(`https://648a959a17f1536d65e95003.mockapi.io/movies/${id}`);
   
  // }
  delgetMovie(id:string){
    this.movieList$=this.movieService.delgetMovie(id);
  }
}
