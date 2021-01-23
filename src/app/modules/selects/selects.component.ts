import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent implements OnInit {
  value: any;
  dataSource = [];
  constructor() {
    this.value = {label: 'framework', value: '11'};
    this.dataSource.push({label: 'typescript', value: '1'});
    this.dataSource.push({label: 'webpack', value: '2'});
    this.dataSource.push({label: 'angular', value: '3'});
    this.dataSource.push( this.value );
    this.dataSource.push({label: 'react', value: '4'});
    this.dataSource.push({label: 'vue', value: '5'});
    this.dataSource.push({label: 'ant', value: '6'});
    this.dataSource.push({label: 'matreial', value: '7'});
   }

  ngOnInit() {
  }

}
