import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./component/home-page/home-page.component";
import { AboutPageComponent } from "./component/about-page/about-page.component";
import { ServicePageComponent } from "./component/service-page/service-page.component";
import { MarketPalaceComponent } from "./component/market-palace/market-palace.component";
import { BlogPgComponent } from "./component/blog-pg/blog-pg.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { LoginPageComponent } from "./component/login-page/login-page.component";

import { from } from "rxjs";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "blogs", component: BlogPgComponent },
  { path: "about", component: AboutPageComponent },
  { path: "service", component: ServicePageComponent },
  { path: "market", component: MarketPalaceComponent },
  { path: "login", component: LoginPageComponent },
  { path: "dashboard", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
