import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AboutPageComponent } from './component/about-page/about-page.component';
import { ServicePageComponent } from './component/service-page/service-page.component';
import { NgbdModalContent } from './component/service-page/NgbdModalContent';
import { MarketPalaceComponent } from './component/market-palace/market-palace.component';
import { BlogPgComponent } from './component/blog-pg/blog-pg.component';
import { ContactusComponent } from './component/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomePageComponent,
    AboutPageComponent,
    ServicePageComponent,
    MarketPalaceComponent,
    NgbdModalContent,
    BlogPgComponent,
    ContactusComponent,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContent],
})
export class AppModule {}
