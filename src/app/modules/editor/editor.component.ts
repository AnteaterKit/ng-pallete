import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Inject, Renderer2 } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor: ElementRef;
  constructor(@Inject(Renderer2) private readonly renderer: Renderer2,
              @Inject(DOCUMENT) private readonly documentRef: Document) { }

  // https://stackoverflow.com/questions/8456652/how-to-get-the-pixel-offset-from-the-current-caret-position-in-an-iframe-with-co
  // Clipboard API,
  // https://stackoverflow.com/questions/1391278/contenteditable-change-events
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.editor);

    fromEvent<any>(this.editor.nativeElement, 'mouseup').subscribe(x => {
      console.log(window.getSelection());
      const selection: Selection = window.getSelection();
      if (selection) {
        return;
        console.log(window.getSelection().getRangeAt(0).startContainer.parentElement);
        const host = window.getSelection().getRangeAt(0).startContainer.parentElement;
        console.log(host);
        const highlight = this.setUpHighlight(host);

        const range = this.documentRef.createRange();
        range.setStart(window.getSelection().getRangeAt(0).startContainer, 2);
        range.setEnd(window.getSelection().getRangeAt(0).startContainer,  10);
        const hostRect = host.getBoundingClientRect();

        console.log(hostRect);

        const { left, top, width, height } = range.getBoundingClientRect();
        console.log(range.getBoundingClientRect());
        const { style } = highlight;

        style.left = this.px(left - hostRect.left + 4);
        style.top = this.px(top - hostRect.top);
        style.width = this.px(width);
        style.height = this.px(height);
        style.display = 'block';

      }
    });

  }

  private setUpHighlight(node): HTMLElement {
    const highlight = this.renderer.createElement('div');
    const { style } = highlight;

    style.background = '#b572ff';
    style.zIndex = '-1';
    style.position = 'absolute';
    style.borderRadius = '4px';
    style.paddingRight = '4px';
    style.paddingLeft = '4px';
    style.zIndex = 222;
    this.renderer.appendChild(node, highlight);

    return highlight;
  }

  px(value: number): string {
    return `${value}px`;
  }

}
