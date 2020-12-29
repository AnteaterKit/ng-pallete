import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit, AfterViewInit {
  @ViewChild('iframe') iframe: ElementRef;
  gistId = 'c3e691bdb8f535b5ce05dd9c8f6702d4';
  @ViewChild('iframe1') iframe1: ElementRef;
  gistId1 = 'd559704e405a165214c495ea9ebb8b49';
  @ViewChild('iframe2') iframe2: ElementRef;
  gistId2 = 'e12ac840e6cc791c30b48c7e111d05db';
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.addGist(this.gistId, this.iframe);
    this.addGist(this.gistId1, this.iframe1);
    this.addGist(this.gistId2, this.iframe2);
  }

  addGist(gistId, iframe) {
    const fileName = '';
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
