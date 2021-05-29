import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  IsActivePreloader: boolean = true;

  constructor() { }

  ngOnInit(): void {

    //this.IsActivePreloader = false;
    setTimeout(()=>{ this.IsActivePreloader = false; }, 500)
    
  }

}
