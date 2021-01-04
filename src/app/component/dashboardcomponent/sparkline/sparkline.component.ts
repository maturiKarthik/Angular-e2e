import { Component, ViewChild, OnInit } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: "app-sparkline",
  templateUrl: "./sparkline.component.html",
  styleUrls: ["./sparkline.component.css"],
})
export class SparklineComponent implements OnInit {
  ngOnInit() {}

  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [75, 100, 650, 300],
      labels: ["Transport", "Food Expenses", "Rent", "Other Utilities"],
      chart: {
        width: 500,
        type: "donut",
      },
      dataLabels: {
        enabled: true,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  }
}
