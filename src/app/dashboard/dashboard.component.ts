import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  barchart: Chart;
  piechart1: Chart;
  piechart2: Chart;
  areachart: Chart;
  constructor() {

  }

  ngOnInit() {
    this.donutPieChart();
  }

  donutPieChart() {
    this.piechart1 = new Chart({
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Load'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }
      },
      plotOptions: {
        pie: {
          shadow: false
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
        }
      },
      series: [{
        name: 'Browsers',
        data: [['Firefox', 6], ['MSIE', 4], ['Chrome', 7]],
        size: '60%',
        innerSize: '20%',
        showInLegend: true,
        dataLabels: {
          enabled: false
        }, type: undefined
      }]
    });

    this.piechart2 = new Chart({
      chart: {
        renderTo: 'container',
        type: 'pie'
      },
      title: {
        text: 'Redeemed'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }
      },
      plotOptions: {
        pie: {
          shadow: false
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
        }
      },
      series: [{
        name: 'Browsers',
        data: [['Firefox', 6], ['MSIE', 4], ['Chrome', 7]],
        size: '60%',
        innerSize: '20%',
        showInLegend: true,
        dataLabels: {
          enabled: false
        }, type: undefined
      }]
    });


    this.areachart = new Chart({
      chart: {
        type: 'area'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      plotOptions: {
        // series: {
        //   fillOpacity: 0.1
        // }
      },

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 200.5, 236.4, 194.1, 95.6, 54.4],
        type: undefined,
        fillOpacity: 0.1
      },
      {
        data: [190.7, 171.5, 106.4, 110.0, 110.0, 176.0, 135.6, 80.5, 216.4, 194.1, 146.6, 64.4],
        type: undefined,
        fillOpacity: 0.1
      }]
    });
  }
}
