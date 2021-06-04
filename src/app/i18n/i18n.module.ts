import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateCacheModule, TranslateCacheSettings, TranslateCacheService } from 'ngx-translate-cache';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { ResolveEnd, Router } from '@angular/router';


@NgModule({
  imports: [
    HttpClientModule,
    BrowserTransferStateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings]
      },
      cacheMechanism: 'Cookie'
    })
  ],
  exports: [TranslateModule]
})
export class I18nModule {
  constructor(
    translate: TranslateService,
    translateCacheService: TranslateCacheService,
    private router: Router
  ) {
    var browserLang: any;
    translateCacheService.init();
    translate.addLangs(['en', 'ru']);
    
    this.router.events.subscribe((routerData) => {
      if(routerData instanceof ResolveEnd){ 
        console.log(routerData.url.split("/")[1]);
        browserLang = routerData.url.split("/")[1];
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
      } 
    })
  }
}

export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export function translateCacheFactory(
  translateService: TranslateService,
  translateCacheSettings: TranslateCacheSettings
) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}