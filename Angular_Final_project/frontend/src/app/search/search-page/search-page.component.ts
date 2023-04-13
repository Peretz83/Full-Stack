import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
searchTerm = ''

  constructor(activatedRoute: ActivatedRoute, private router: Router, private api: ApiService){

    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm) this.searchTerm=params.searchTerm
    })
  }

  ngOnInit(): void {
    this.api.getEmployees()
  }

  search(term:string){
    if(term)
    this.router.navigateByUrl('search/' + term)
  }
}
