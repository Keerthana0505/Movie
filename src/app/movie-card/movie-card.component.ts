import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  constructor(private router: Router) {}
  
  @Input() movie = {
    id:'1',
    name: 'Vikram',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    rating: 8.4,
    summary:
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
  };
@Output() delete=new EventEmitter<string>();
// @Output() delete=new EventEmitter<string>();
  show = true;

 visible() {
    this.show = !this.show;
  }
  delMovie(id:string)
  {
    this.delete.emit(id);
  }
  goToDetails(id: string) {
    this.router.navigate([`/movies/${id}`]);    
    //  this.router.navigate(['/news']) ;
  }

}
