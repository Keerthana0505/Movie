import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, interval, observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-stock-rate',
  templateUrl: './stock-rate.component.html',
  styleUrls: ['./stock-rate.component.css']
})
export class StockRateComponent {
  stocks:any
  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  searchForm=this.fb.group({

    searchField:[''],

  });

  ngOnInit()

  {
    // this.searchForm.get('searchField')?.valueChanges.pipe(debounceTime(500),
    // distinctUntilChanged(),switchMap((val)=>timer(0,10000).pipe(switchMap((n)=>this.search(val as string)))))
     this.searchForm.get('searchField')?.valueChanges.pipe(debounceTime(500),
     distinctUntilChanged(),switchMap((val)=>interval(1000).pipe(switchMap((n)=>this.search(val as string)))))
     .subscribe((value:any)=>{this.stocks=value;});
     

  }
  search(region: string)
  {

    return this.http.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${region}&apikey=WQKKQOF5444F2H7J`)

  }

}
