import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
   isActiveMenuTrigger: boolean = false;
   enLang: string = "";
   ruLang: string = "";
  constructor(public translate: TranslateService,private router: Router) {
       this.ruLang = this.router.url.replace('en', 'ru').toString();
       this.enLang = this.router.url.replace('ru', 'en').toString();
   }

  ngOnInit(): void {
  }


  public menuTrigger(){
    if (this.isActiveMenuTrigger == true) {
       this.isActiveMenuTrigger = false;
    }else{
      this.isActiveMenuTrigger = true;
    }
  }

  public getCurrentUrl(lang:any){
    if (lang == 'ru') {
      
      this.router.navigateByUrl(this.router.url.replace('en', lang));
    }
    else{
      this.router.navigateByUrl(this.router.url.replace('ru', lang));
    }
  } 
}
