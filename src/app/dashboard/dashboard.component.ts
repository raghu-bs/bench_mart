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

  }
}
