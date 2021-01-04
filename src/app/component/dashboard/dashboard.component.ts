import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild("div", { static: false }) divView: ElementRef;
  hideloader = true;
  hidedashbaord = false;

  constructor() {}

  ngAfterViewInit() {
    this.hideloader;
  }

  //In this timeout we will show loading
  hideloaderui = setTimeout(() => {
    console.log("Timer launched");
    this.hideloader = false;
    this.hidedashbaord = true;
  }, 4000);
}
