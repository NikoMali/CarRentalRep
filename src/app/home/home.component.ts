import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  IsActivePreloader: boolean = true;

  constructor( private meta: Meta,
    private titleService: Title) { }

  ngOnInit(): void {

    this.IsActivePreloader = false;
    this.titleService.setTitle('BATUMI Car Rental');
    this.meta.addTag({
      name: 'CarRental',
      content: 'BATUMI Car Rental Content'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Batumi car rental low price'
      });
    //setTimeout(()=>{ this.IsActivePreloader = false; }, 500)
    
  }

}
