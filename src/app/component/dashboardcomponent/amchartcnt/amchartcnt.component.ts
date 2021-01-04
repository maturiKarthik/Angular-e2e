import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
/* AMcharts Imports */
// amCharts imports
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: "app-amchartcnt",
  templateUrl: "./amchartcnt.component.html",
  styleUrls: ["./amchartcnt.component.css"],
})
export class AmchartcntComponent implements OnInit {
  private chart: am4charts.XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create(
        "chartdiv",
        am4plugins_forceDirected.ForceDirectedTree
      );
      chart.legend = new am4charts.Legend();

      let networkSeries = chart.series.push(
        new am4plugins_forceDirected.ForceDirectedSeries()
      );

      networkSeries.data = [
        {
          name: "Flora",
          children: [
            {
              name: "Black Tea",
              value: 1,
            },
            {
              name: "Floral",
              children: [
                {
                  name: "Chamomile",
                  value: 1,
                },
                {
                  name: "Rose",
                  value: 1,
                },
                {
                  name: "Jasmine",
                  value: 1,
                },
              ],
            },
          ],
        },
        {
          name: "France",
          children: [
            {
              name: "Part Time",
              children: [
                {
                  name: "Pizza hut",
                  value: 8 + "$",
                },
                {
                  name: "Macdonals",
                  value: 15 + "$",
                },
                {
                  name: "Burger king",
                  value: 10 + "$",
                },
                {
                  name: "Fast Food Joint ",
                  value: 7 + "$",
                },
                {
                  name: "Indian Restaurant",
                  value: 2 + "$",
                },
              ],
            },
            {
              name: "SPT",
              children: [
                {
                  name: "Web Design",
                  value: 1400,
                },
                {
                  name: "App development",
                  value: 1600,
                },
              ],
            },
            {
              name: "Living Expense",
              children: [
                {
                  name: "Transport",
                  value: 25,
                },
                {
                  name: "Food",
                  value: 200,
                },
              ],
            },
            {
              name: "Citrus Fruit",
              children: [
                {
                  name: "Grapefruit",
                  value: 1,
                },
                {
                  name: "Orange",
                  value: 1,
                },
                {
                  name: "Lemon",
                  value: 1,
                },
                {
                  name: "Lime",
                  value: 1,
                },
              ],
            },
          ],
        },
        {
          name: 'italy',
          children: [{
            name: 'Part Time',
            children: [{
              name: 'Pizza hut', value: 8+'$'
            }, {
              name: 'Macdonals', value: 15+'$'
            }, {
              name: 'Burger king', value: 10+'$'
            }, {
              name: 'Fast Food Joint ', value: 7+'$'
            }, {
              name: 'Indian Restaurant', value: 2+'$'
            }]
          }, {
            name: 'SPT',
            children: [{
              name: 'Web Design', value: 1400
            }, {
              name: 'App development', value: 1600
            }]
          }, {
            name: 'Living Expense',
            children: [{
              name: 'Transport', value: 25
            }, {
              name: 'Food', value: 200
            }]
          }, {
            name: 'Citrus Fruit',
            children: [{
              name: 'Grapefruit', value: 1
            }, {
              name: 'Orange', value: 1
            }, {
              name: 'Lemon', value: 1
            }, {
              name: 'Lime', value: 1
            }]
          }]
        },
        {
          name: 'Germany',
          children: [{
            name: 'Part Time',
            children: [{
              name: 'Pizza hut', value: 8+'$'
            }, {
              name: 'Macdonals', value: 15+'$'
            }, {
              name: 'Burger king', value: 10+'$'
            }, {
              name: 'Fast Food Joint ', value: 7+'$'
            }, {
              name: 'Indian Restaurant', value: 2+'$'
            }]
          }, {
            name: 'SPT',
            children: [{
              name: 'Web Design', value: 1400
            }, {
              name: 'App development', value: 1600
            }]
          }, {
            name: 'Living Expense',
            children: [{
              name: 'Transport', value: 25
            }, {
              name: 'Food', value: 200
            }]
          }, {
            name: 'Citrus Fruit',
            children: [{
              name: 'Grapefruit', value: 1
            }, {
              name: 'Orange', value: 1
            }, {
              name: 'Lemon', value: 1
            }, {
              name: 'Lime', value: 1
            }]
          }]
        },
        {
          name: 'Spain',
          children: [{
            name: 'Part Time',
            children: [{
              name: 'Pizza hut', value: 8+'$'
            }, {
              name: 'Macdonals', value: 15+'$'
            }, {
              name: 'Burger king', value: 10+'$'
            }, {
              name: 'Fast Food Joint ', value: 7+'$'
            }, {
              name: 'Indian Restaurant', value: 2+'$'
            }]
          }, {
            name: 'SPT',
            children: [{
              name: 'Web Design', value: 1400
            }, {
              name: 'App development', value: 1600
            }]
          }, {
            name: 'Living Expense',
            children: [{
              name: 'Transport', value: 25
            }, {
              name: 'Food', value: 200
            }]
          }, {
            name: 'Citrus Fruit',
            children: [{
              name: 'Grapefruit', value: 1
            }, {
              name: 'Orange', value: 1
            }, {
              name: 'Lemon', value: 1
            }, {
              name: 'Lime', value: 1
            }]
          }]
        },
        {
          name: 'polland',
          children: [{
            name: 'Part Time',
            children: [{
              name: 'Pizza hut', value: 8+'$'
            }, {
              name: 'Macdonals', value: 15+'$'
            }, {
              name: 'Burger king', value: 10+'$'
            }, {
              name: 'Fast Food Joint ', value: 7+'$'
            }, {
              name: 'Indian Restaurant', value: 2+'$'
            }]
          }, {
            name: 'SPT',
            children: [{
              name: 'Web Design', value: 1400
            }, {
              name: 'App development', value: 1600
            }]
          }, {
            name: 'Living Expense',
            children: [{
              name: 'Transport', value: 25
            }, {
              name: 'Food', value: 200
            }]
          }, {
            name: 'Citrus Fruit',
            children: [{
              name: 'Grapefruit', value: 1
            }, {
              name: 'Orange', value: 1
            }, {
              name: 'Lemon', value: 1
            }, {
              name: 'Lime', value: 1
            }]
          }]
        },
        {
          name: 'Swiss',
          children: [{
            name: 'Part Time',
            children: [{
              name: 'Pizza hut', value: 8+'$'
            }, {
              name: 'Macdonals', value: 15+'$'
            }, {
              name: 'Burger king', value: 10+'$'
            }, {
              name: 'Fast Food Joint ', value: 7+'$'
            }, {
              name: 'Indian Restaurant', value: 2+'$'
            }]
          }, {
            name: 'SPT',
            children: [{
              name: 'Web Design', value: 1400
            }, {
              name: 'App development', value: 1600
            }]
          }, {
            name: 'Living Expense',
            children: [{
              name: 'Transport', value: 25
            }, {
              name: 'Food', value: 200
            }]
          }, {
            name: 'Citrus Fruit',
            children: [{
              name: 'Grapefruit', value: 1
            }, {
              name: 'Orange', value: 1
            }, {
              name: 'Lemon', value: 1
            }, {
              name: 'Lime', value: 1
            }]
          }]
        },
        {
          name: 'Russia',
          children: [{
            name: 'Part Time',
            children: [{
              name: 'Pizza hut', value: 8+'$'
            }, {
              name: 'Macdonals', value: 15+'$'
            }, {
              name: 'Burger king', value: 10+'$'
            }, {
              name: 'Fast Food Joint ', value: 7+'$'
            }, {
              name: 'Indian Restaurant', value: 2+'$'
            }]
          }, {
            name: 'SPT',
            children: [{
              name: 'Web Design', value: 1400
            }, {
              name: 'App development', value: 1600
            }]
          }, {
            name: 'Living Expense',
            children: [{
              name: 'Transport', value: 25
            }, {
              name: 'Food', value: 200
            }]
          }, {
            name: 'Citrus Fruit',
            children: [{
              name: 'Grapefruit', value: 1
            }, {
              name: 'Orange', value: 1
            }, {
              name: 'Lemon', value: 1
            }, {
              name: 'Lime', value: 1
            }]
          }]
        },
      ];

      networkSeries.dataFields.linkWith = "linkWith";
      networkSeries.dataFields.name = "name";
      networkSeries.dataFields.id = "name";
      networkSeries.dataFields.value = "value";
      networkSeries.dataFields.children = "children";

      networkSeries.nodes.template.tooltipText = "{name}";
      networkSeries.nodes.template.fillOpacity = 1;

      networkSeries.nodes.template.label.text = "{name}";
      networkSeries.fontSize = 8;
      networkSeries.maxLevels = 2;
      networkSeries.maxRadius = am4core.percent(6);
      networkSeries.manyBodyStrength = -16;
      networkSeries.nodes.template.label.hideOversized = true;
      networkSeries.nodes.template.label.truncate = true;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  ngOnInit() {}
}
