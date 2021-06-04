import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: 'en', component: HomeComponent },
  { path: 'en/Home', component: HomeComponent },
  { path: 'en/Offers', component: OffersComponent },
  { path: 'en/AboutUs', component: AboutUsComponent },
  { path: 'en/Contact', component: ContactComponent },
  { path: 'ru', component: HomeComponent },
  { path: 'ru/Home', component: HomeComponent },
  { path: 'ru/Offers', component: OffersComponent },
  { path: 'ru/AboutUs', component: AboutUsComponent },
  { path: 'ru/Contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
