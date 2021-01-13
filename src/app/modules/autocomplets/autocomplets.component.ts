import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplets',
  templateUrl: './autocomplets.component.html',
  styleUrls: ['./autocomplets.component.scss']
})
export class AutocompletsComponent implements OnInit {
  value: any;
  dataSource = [];
  filteredOptions = [];
  myControl = new FormControl();
  constructor() {
    this.value = {label: 'framework', value: 'value'};
    this.myControl.patchValue(this.value);
    // {label: '55', value: 'drer'}, {label: 'sdnglkangrkj', value: 'drer'}
    this.dataSource.push({label: 'typescript', value: 'drer'});
    this.dataSource.push({label: 'webpack', value: 'drer'});
    this.dataSource.push({label: 'angular', value: 'drer'});
    this.dataSource.push( this.value );
    this.dataSource.push({label: 'react', value: 'drer'});
    this.dataSource.push({label: 'vue', value: 'drer'});
    this.dataSource.push({label: 'ant', value: 'drer'});
    this.dataSource.push({label: 'matreial', value: 'drer'});
    console.log(this.dataSource);
    this.filteredOptions = this.dataSource;
  }

  ngOnInit(): void {
    this.myControl.valueChanges.subscribe(x => {
      this._filter(x);
    });

  }

  private _filter(value: any): void {
    if (!value || !(typeof value === 'string')) {
      this.filteredOptions = this.dataSource;
      return;
    }
    console.log('ffff');
    const filterValue = value.toLowerCase();

    this.filteredOptions = this.dataSource.filter(option => option.label.toLowerCase().indexOf(filterValue) === 0);
  }

}
