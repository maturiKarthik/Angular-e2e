import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideNavComponent } from "./component/side-nav/side-nav.component";
import { HomePageComponent } from "./component/home-page/home-page.component";
import { AboutPageComponent } from "./component/about-page/about-page.component";
import { ServicePageComponent } from "./component/service-page/service-page.component";
import { MarketPalaceComponent } from "./component/market-palace/market-palace.component";
import { BlogPgComponent } from "./component/blog-pg/blog-pg.component";
import { ContactusComponent } from "./component/contactus/contactus.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { LoginPageComponent } from "./component/login-page/login-page.component";
import { HomeCntComponent } from "./component/dashboardcomponent/home-cnt/home-cnt.component";
//chart
import { ChartsModule, ThemeService } from "ng2-charts";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//Apex chart
import { NgApexchartsModule } from "ng-apexcharts";
// Material Design
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FinanceCntComponent } from "./component/dashboardcomponent/finance-cnt/finance-cnt.component";

import { AmchartcntComponent } from "./component/dashboardcomponent/amchartcnt/amchartcnt.component";
import { SparklineComponent } from './component/dashboardcomponent/sparkline/sparkline.component';
//http
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomePageComponent,
    AboutPageComponent,
    ServicePageComponent,
    MarketPalaceComponent,
    BlogPgComponent,
    ContactusComponent,
    DashboardComponent,
    LoginPageComponent,
    HomeCntComponent,
    FinanceCntComponent,
    AmchartcntComponent,
    SparklineComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
