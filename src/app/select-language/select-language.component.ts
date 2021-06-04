import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  template: `
    <select #langSelect (change)="changeLang(langSelect.value,translate.currentLang)">
      <option
        *ngFor="let lang of translate.getLangs()"
        [value]="lang"
        [attr.selected]="lang === translate.currentLang ? '' : null"
      >{{lang}}</option>
    </select>
  `,
})
export class SelectLanguageComponent {
  constructor(public translate: TranslateService,private route: ActivatedRoute, private router: Router) { }

  public changeLang(newLang: any, oldLang: any){
    this.translate.use(newLang);
    
    this.router.navigateByUrl(this.router.url.replace(oldLang, newLang));
    setTimeout(()=>{ window.location.reload() }, 500)
    //window.location.reload();
  }
}