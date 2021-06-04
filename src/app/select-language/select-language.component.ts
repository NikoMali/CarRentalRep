import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  template: `
    
    <div class = "langList" style = "display:flex; position:relative; right:-110px; top:6px;">
      <div *ngFor="let lang of translate.getLangs()" (click)="changeLang(lang,translate.currentLang)" [className]="lang === translate.currentLang ? 'active LangName' : 'LangName'"> {{lang}} </div>
    </div>
  `,
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent {
  constructor(public translate: TranslateService,private route: ActivatedRoute, private router: Router) { }

  public changeLang(newLang: any, oldLang: any){
    this.translate.use(newLang);
    
    this.router.navigateByUrl(this.router.url.replace(oldLang, newLang));
    setTimeout(()=>{ window.location.reload() }, 100)
    //window.location.reload();
  }
}