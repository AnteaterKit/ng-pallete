import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplets',
  templateUrl: './autocomplets.component.html',
  styleUrls: ['./autocomplets.component.scss']
})
export class AutocompletsComponent implements OnInit {

  dataSource = [];
  constructor() {
    // {label: '55', value: 'drer'}, {label: 'sdnglkangrkj', value: 'drer'}
    this.dataSource.push({label: '55', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    this.dataSource.push({label: 'ff', value: 'drer'});
    console.log(this.dataSource);
  }

  ngOnInit() {
  }

}
