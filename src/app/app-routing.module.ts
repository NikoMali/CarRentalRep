import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full'  },
  { path: 'en', component: HomeComponent },
  { path: 'en/home', component: HomeComponent },
  { path: 'en/offers', component: OffersComponent },
  { path: 'en/aboutus', component: AboutUsComponent },
  { path: 'en/contact', component: ContactComponent },
  { path: 'ru', component: HomeComponent },
  { path: 'ru/home', component: HomeComponent },
  { path: 'ru/offers', component: OffersComponent },
  { path: 'ru/aboutus', component: AboutUsComponent },
  { path: 'ru/contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
