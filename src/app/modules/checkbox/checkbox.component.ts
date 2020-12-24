import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxDocComponent implements OnInit , AfterViewInit{
  @ViewChild('iframe1') iframe1: ElementRef;
  gistId1 = '507cc4203400bca4b45a6a11451e8282';
  file: string;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
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
        <script type="text/javascript" src="https://gist.github.com/${this.gistId}.js?file=${fileName}"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }

}
