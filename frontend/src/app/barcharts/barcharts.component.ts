import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-barcharts',
  templateUrl: './barcharts.component.html',
  styleUrls: ['./barcharts.component.scss']
})
export class BarchartsComponent implements OnInit {
  url1 = './assets/age.json'
  public barChartOptions: ChartOptions = {
    responsive: true,

  };
  chartName = []
  chartAge = []
  showChart = false
  chartData;
  // public mbarChartLabels:string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  public barChartLabels: Label[] = this.chartName;
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: this.chartAge, label: 'Age' },
  ];



  constructor(private http: HttpClient, public service: UsersService,private Router:Router,) {
    this.getallCustomersdata()
  }


  ngOnInit() {

  }
  getallCustomersdata() {
    this.service.getallCustomersdata().subscribe((data: []) => {
      for (let b of data) {
        this.chartName.push(b['Name'])
        this.chartAge.push(b['age'])
      }
      this.showChart = true
    })
  }

  backtohome(){
    this.Router.navigate(['user'])
  }











}
