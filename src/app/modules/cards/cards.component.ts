import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, AfterViewInit {
  @ViewChild('iframe') iframe: ElementRef;
  gistId = '395bc7968dc0e85c18f1de1f117cbd01';
  @ViewChild('iframe1') iframe1: ElementRef;
  gistId1 = 'b437f087c404d7cac7fffff99ee69c0e';
  @ViewChild('iframe2') iframe2: ElementRef;
  gistId2 = 'b42812e448f6dbfd31a25e808276c4c9';
  @ViewChild('iframe3') iframe3: ElementRef;
  gistId3 = '28179a9f48d46affb5552426d9ed47bc';
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.addGist(this.gistId, this.iframe);
    this.addGist(this.gistId1, this.iframe1);
    this.addGist(this.gistId2, this.iframe2);
    this.addGist(this.gistId3, this.iframe3);
  }


  addGist(gistId, iframe) {
    const fileName =  '';
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
