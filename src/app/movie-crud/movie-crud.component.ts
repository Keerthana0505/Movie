import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-crud',
  templateUrl: './movie-crud.component.html',
  styleUrls: ['./movie-crud.component.css']
})
export class MovieCrudComponent {
  movie$:any
  http:any
  ngOnInit(){
    this.http.get(`https://648a959a17f1536d65e95003.mockapi.io/movies`)
  }

}
