import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes} from '@angular/router';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { RxComponent } from './rx/rx.component';
import { HttpClientModule } from '@angular/common/http';
import { StockRateComponent } from './stock-rate/stock-rate.component';
import { NewsAppComponent } from './news-app/news-app.component';
import { MovieCrudComponent } from './movie-crud/movie-crud.component';
import { MovieDetatilsComponent } from './movie-detatils/movie-detatils.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes:Routes=[
  {path:'forms',component:FormDemoComponent},
  {path:'count',component:CounterComponent},
 { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent},
  {path:'news',component:NewsAppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormDemoComponent,
    CounterComponent,
    MovieListComponent,
    MovieCardComponent,
    AddMovieComponent,
    RxComponent,
    StockRateComponent,
    NewsAppComponent,
    MovieCrudComponent,
    MovieDetatilsComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,RouterModule.forRoot(routes),FormsModule, BrowserAnimationsModule,MatButtonModule,MatFormFieldModule,
    MatInputModule,MatIconModule,MatBadgeModule,HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
