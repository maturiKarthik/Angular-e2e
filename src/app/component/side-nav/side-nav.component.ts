import { Component, OnInit } from '@angular/core';
import { UrlServiceService } from '../../service/url-service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  bigMenuStatus = false;

  constructor(private urlService: UrlServiceService) {}

  ngOnInit() {}

  toggleMenu(status) {
    console.log(this.bigMenuStatus);
    this.bigMenuStatus = status;
  }

  navigate(url, status) {

    this.toggleMenu(status);
    this.urlService.navigateToUrl(url);
  }
}
