import { Component, OnInit, Output } from "@angular/core";
import { from } from "rxjs";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-service-page",
  templateUrl: "./service-page.component.html",
  styleUrls: ["./service-page.component.css"],
})
export class ServicePageComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  @Output()
  list2 = [
    {
      id: "sharedcluster",
      title: "Shared Cluster",
      caption: "The best way to know Europe",
      price: "Free",
      bt_txt: "Start Free",
      description:
        "For teams learning MongoDB or developing small applications. Get 512MB storage free and scale up to 5GB.",
    },
    {
      id: "dedicatedcluster",
      title: "Dedicated Clusters",
      caption: "For the mission in France ",
      price: "350$",
      bt_txt: "Get Started",
      description:
        "For teams learning MongoDB or developing small applications. Get 512MB storage free and scale up to 5GB.",
    },
    {
      id: "multiregion",
      title: "Multi-Region Clusters",
      caption: "For the mission in Europe ",
      price: "655$",
      bt_txt: "Get Started",
      description:
        "For teams learning MongoDB or developing small applications. Get 512MB storage free and scale up to 5GB.",
    },
  ];

  listoption = [
    {
      id: "sharedcluster",
      title: "Shared Cluster",
      features: [
        "Unlimited Acess to Database",
        "Guidence by mail",
        "contact by mail",
      ],
    },
    {
      id: "dedicatedcluster",
      title: "Dedicated Clusters",
      features: [
        "Unlimited Acess to Database",
        "Guidence by mail",
        "contact by mail",
        "Personal consultant to handle ",
      ],
    },
    {
      id: "multiregion",
      title: "Multi-Region Clusters",
      features: [
        "Unlimited Acess to Database",
        "Guidence by mail",
        "contact by mail",
        "Personal consultant to handle ",
        "Apply all over europe",
      ],
    },
    {
      id: "cvmaker",
      title: "CV Maker",
      features: ["ParttimeJob - Free", "Professionl Job - 5$"],
    },
    {
      id: "documentation",
      title: "Documentation",
      features: ["Visa Documentation - 25$", "Prefecture Documentation- 10$"],
    },
    {
      id: "TIF",
      title: "Tour in France",
      features: [
        "France  - 250$",
        "Europe- 350 $",
        "Selected Detination - *Price variable",
      ],
    },
    {
      id: "TS",
      title: "Taxi Service",
      features: ["airport  - 50$", "* Fixed price"],
    },
    {
      id: "accomadation",
      title: "Accomodation",
      features: ["Property Search For you", "* Fixed price"],
    },
  ];

  ngOnInit() {}
}
