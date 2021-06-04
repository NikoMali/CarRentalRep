import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
   isActiveMenuTrigger: boolean = false;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }


  public menuTrigger(){
    if (this.isActiveMenuTrigger == true) {
       this.isActiveMenuTrigger = false;
    }else{
      this.isActiveMenuTrigger = true;
    }
  }
}
