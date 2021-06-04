import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  IsActivePreloader: boolean = true;

  constructor( private meta: Meta,
    private titleService: Title, private translate: TranslateService) { 
     // this.ngOnInit()
    }

  ngOnInit(): void {

    this.translate.onLangChange.subscribe(lang=>{
      
      if (lang.lang == 'ru') {
        console.log("ru");
        this.titleService.setTitle('ru Rent а Car in Batumi, Georgia');
        this.meta.addTag({
          name: 'ru Car Rental',
          content: 'BATUMI Car Rental Content'
        });
        this.meta.addTag({
          name: 'ru City',
          content: 'Batumi'
        });
        this.meta.updateTag(
          {
            name: 'description',
            content: 'ru Batumi car rental low price.Cheap Car Rental in Batumi. Batumi Car Rental. Rent a Car in Batumi, Georgia. Lowest Price Guaranteed. Car Hire in Batumi. Economy, Van, 4x4 booking Car. No Deposit Fee, Unlimited Mileage.'
          });
        } else {
          console.log("en");
        this.titleService.setTitle('Rent а Car in Batumi, Georgia');
        this.meta.addTag({
          name: 'Car Rental',
          content: 'BATUMI Car Rental Content'
        });
        this.meta.addTag({
          name: 'City',
          content: 'Batumi'
        });
        this.meta.updateTag(
          {
            name: 'description',
            content: 'Batumi car rental low price.Cheap Car Rental in Batumi. Batumi Car Rental. Rent a Car in Batumi, Georgia. Lowest Price Guaranteed. Car Hire in Batumi. Economy, Van, 4x4 booking Car. No Deposit Fee, Unlimited Mileage.'
          });
        }
      })
      //setTimeout(()=>{ this.IsActivePreloader = false; }, 500)
      
      this.IsActivePreloader = false;
    }
    public open(){
    window.location.reload();

  } 
}
