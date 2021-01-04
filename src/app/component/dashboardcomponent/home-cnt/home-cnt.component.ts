import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartType, RadialChartOptions } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label, SingleDataSet } from "ng2-charts";
import { ListOfSchoolsService } from "../../../service/list-of-schools.service";
// Material table
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { FormControl } from "@angular/forms";
import { from, Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";
import {
  ListOfStudyService,
  Dicipline,
} from "../../../service/list-of-study.service";
// Apex Colum-chart
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-home-cnt",
  templateUrl: "./home-cnt.component.html",
  styleUrls: ["./home-cnt.component.css"],
})
export class HomeCntComponent implements OnInit, AfterViewInit {
  // AutoComplete
  stateCtrl = new FormControl();
  filteredDicipline: Observable<Dicipline[]>;
  test = "poland";

  //Apex-Bar-colume-chart
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  //Apex-Radar-chart
  @ViewChild("radarchart", { static: false }) radarchart: ChartComponent;
  public radarchartOptions: Partial<ChartOptions>;

  // EOF AutoComplete

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ["rank", "status", "name", "country", "fee"];
  dataSource = this.listofschools.dataSource;

  constructor(
    public listofschools: ListOfSchoolsService,
    public listOfStudyService: ListOfStudyService
  ) {
    // console.log(listofschools.dataSource);
    // Autocomplete filter
    this.filteredDicipline = this.stateCtrl.valueChanges.pipe(
      startWith(""),
      map((state) =>
        state
          ? this._filteredDicipline(state)
          : this.listOfStudyService.dicipline.slice()
      )
    );

    //Apex cool-bar-colum-chart
    this.chartOptions = {
      series: [
        {
          name: "per annum",
          data: [7.3, 10.05, 15.2, 10, 4.0, 10.08, 10.99, 6.9, 9.1, 16],
        },
      ],
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "PNB",
          "SBI",
          "AXIS",
          "BOB",
          "HDFC",
          "TC",
          "UBI",
          "BOI",
          "KMB",
        ],
        position: "top",
        labels: {
          offsetY: -18,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
          offsetY: -35,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Interest Rate Of Banks",
        floating: false,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444",
        },
      },
    };
    //EOF cool-bar-colum-chart

    // Apex radar chart
    this.radarchartOptions = {
      series: [
        {
          name: "Series 1",
          data: [4, 3.5, 4, 3, 2],
        },
      ],
      chart: {
        height: 350,
        type: "radar",
      },
      title: {
        text: "Job Rating Europe",
      },
      xaxis: {
        categories: [
          "Career Opportunities",
          "Salary & Benefits",
          "Work/Life Balance",
          "Culture & Values",
          "Visa Paper work",
        ],
      },
    };
    //EOF radar chart
  }

  private _filteredDicipline(value: string): Dicipline[] {
    const filterValue = value.toLowerCase();
    this.test = filterValue;
    //this.listofschools.applyFilter
    //this.listOfSchools.applyFilter(this.test);
    this.listofschools.applyFilter1(this.test);
    console.log("enter" + this.test);
    return this.listOfStudyService.dicipline.filter(
      (state) => state.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  ngAfterViewInit() {
    this.listofschools.dataSource.paginator = this.paginator;
  }

  ngOnInit() {}

  applyFilter(event: Event) {
    this.listofschools.applyFilter(event);
  }
}
