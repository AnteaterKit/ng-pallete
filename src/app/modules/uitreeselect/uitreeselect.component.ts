import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uitreeselect',
  templateUrl: './uitreeselect.component.html',
  styleUrls: ['./uitreeselect.component.scss']
})
export class UitreeselectComponent implements OnInit {
  value = 2;
  nodes = [
    {
      id: 1,
      title: 'NG UI library',
      children: [
        {
          id: 2,
          title: 'Open source',
          children: [
            { id: 3, title: 'Material' },
            { id: 4, title: 'TaigaUI' }
          ]
        },
        {
          id: 5,
          title: 'Commercial',
          children: [{ id: 6, title: 'DevExpress'}]
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
