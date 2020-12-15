import { Component, OnInit, Output } from '@angular/core';
import { UrlServiceService } from '../../service/url-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private urlService: UrlServiceService) {}
  @Output()
  universityLogo = [
    ' ../../../assets/image/creteil.png',
    '../../../assets/image/epita.svg',
    '../../../assets/image/isc.jpeg',
    '../../../assets/image/skema.png',
    '../../../assets/image/italy1.png'
  ];

  @Output()
  keypoints = [
    {
      id: 1 ,
      title: 'COLLECT & CROSS',
      content:
        'With supporting text below as a natural lead-in to additional content.',
      duration: 1200,
    },
    {
      id: 2 ,
      title: 'ANALYZE & VISUALIZE',
      content:
        'With supporting text below as a natural lead-in to additional content',
      duration: 1300,
    },
    {
      id: 3 ,
      title: 'TAKE ACTION',
      content:
        'With supporting text below as a natural lead-in to additional content.',
      duration: 1400,
    },
    {
      id: 4 ,
      title: 'Transperent',
      content:
        'With supporting text below as a natural lead-in to additional content.',
      duration: 1500,
    }

  ];
  ngOnInit() {}

  getUrlService() {
    return this.urlService;
  }
}
