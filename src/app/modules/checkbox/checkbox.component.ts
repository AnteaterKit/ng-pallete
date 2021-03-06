import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxDocComponent implements OnInit , AfterViewInit{
  che = true;
  @ViewChild('iframe1') iframe1: ElementRef;
  @ViewChild('iframe2') iframe2: ElementRef;
  @ViewChild('iframe3') iframe3: ElementRef;
  @ViewChild('iframe4') iframe4: ElementRef;
  gistId1 = '507cc4203400bca4b45a6a11451e8282';
  gistId2 = '60dc5a30d67f6754603c476f898fe5c7';
  gistId3 = '95f2fe5a3071984afc14ee3eac43d542';
  gistId4 = '82580b321c6503f029cda62b444393d2';
  @ViewChild('iframe5') iframe5: ElementRef;
  gistId5 = '9249845371d6a0199340a1af84e969fe';
  file: string;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.addGist(this.gistId1, this.iframe1);
    this.addGist(this.gistId2, this.iframe2);
    this.addGist(this.gistId3, this.iframe3);
    this.addGist(this.gistId4, this.iframe4);
    this.addGist(this.gistId5, this.iframe5);
  }


  addGist(gistId, iframe) {
    const fileName = (this.file) ? this.file : '';
    iframe.nativeElement.id = 'gist-' + gistId;
    const doc = iframe.nativeElement.contentDocument || iframe.nativeElement.contentElement.contentWindow;
    const content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${iframe.nativeElement.id}')">
        <script type="text/javascript" src="https://gist.github.com/${gistId}.js?file=${fileName}"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }

}
