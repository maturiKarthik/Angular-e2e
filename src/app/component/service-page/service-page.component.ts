import { Component, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from './NgbdModalContent';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css'],
})
export class ServicePageComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  @Output()
  list2 = [
    {
      id: 'sharedcluster',
      title: 'Shared Cluster',
      caption: 'The best way to know Europe',
      price: 'Free',
      bt_txt: 'Start Free',
      features: [
        'Unlimited Acess to Database',
        'Guidence by mail',
        'contact by mail',
      ],
      description:
        'For teams learning MongoDB or developing small applications. Get 512MB storage free and scale up to 5GB.',
    },
    {
      id: 'dedicatedcluster',
      title: 'Dedicated Clusters',
      caption: 'For the mission in France ',
      price: '350$',
      bt_txt: 'Get Started',
      features: [
        'Unlimited Acess to Database',
        'Guidence by mail',
        'contact by mail',
        'Personal consultant to handle ',
      ],
      description:
        'For teams learning MongoDB or developing small applications. Get 512MB storage free and scale up to 5GB.',
    },
    {
      id: 'multiregion',
      title: 'Multi-Region Clusters',
      caption: 'For the mission in Europe ',
      price: '655$',
      bt_txt: 'Get Started',
      features: [
        'Unlimited Acess to Database',
        'Guidence by mail',
        'contact by mail',
        'Personal consultant to handle ',
        'Apply all over europe',
      ],
      description:
        'For teams learning MongoDB or developing small applications. Get 512MB storage free and scale up to 5GB.',
    },
  ];

  list3 = [
    {
      id: 'cvmaker',
      price: ['ParttimeJob - Free', 'Professionl Job - 5$'],
    },
    {
      id: 'documentation',
      price: ['Visa Documentation - 25$', 'Prefecture Documentation- 10$'],
    },
    {
      id: 'TIF',
      price: [
        'France  - 250$',
        'Europe- 350 $',
        'Selected Detination - *Price variable',
      ],
    },
  ];

  ngOnInit() {}

  open(idSend) {
    this.list2.forEach((element) => {
      if (element.id === idSend) {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.title = element.title;
        modalRef.componentInstance.name = element.features;
      }
    });
  }

  openprice(idSend) {
    this.list3.forEach((element) => {
      if (element.id === idSend) {
        // tslint:disable-next-line: jsdoc-format
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.title = element.id;
        modalRef.componentInstance.name = element.price;
      }
    });
  }
}
