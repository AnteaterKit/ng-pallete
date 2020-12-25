import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @ViewChild('iframe1') iframe1: ElementRef;
  gistId1 = '9249845371d6a0199340a1af84e969fe';
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
