import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlServiceService {
  constructor(private route: Router) {}

  navigateToUrl(url) {
    console.log(url);
    try {
      this.route.navigateByUrl(url);
    } catch (error) {
      console.log(error);
    }
  }
}
