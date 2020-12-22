import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngabout',
  templateUrl: './ngabout.component.html',
  styleUrls: ['./ngabout.component.scss']
})
export class NgaboutComponent implements OnInit {

  @ViewChild('text3', {static: false})
  private text3: ElementRef;
  @ViewChild('ngall', {static: false})
  private ngall: ElementRef;

  @ViewChild('text4', {static: false})
  private text4: ElementRef;
  @ViewChild('ngapi', {static: false})
  private ngapi: ElementRef;

  @ViewChild('text5', {static: false})
  private text5: ElementRef;

  @ViewChild('text6', {static: false})
  private text6: ElementRef;


  @ViewChild('ngcdk', {static: false})
  private ngcdk: ElementRef;
  @ViewChild('ngrx', {static: false})
  private ngrx: ElementRef;
  @ViewChild('ngrxo', {static: false})
  private ngrxo: ElementRef;

  @ViewChild('face', {static: false})
  private face: ElementRef;


  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {

    setTimeout(x => {
      this.renderer.setStyle(this.text3.nativeElement, 'display', 'block');
    }, 1000);

    setTimeout(x => {
      this.renderer.setStyle(this.ngall.nativeElement, 'box-shadow', '0 0 10px rgba(0,0,0,0.5)');
      this.renderer.setStyle(this.ngall.nativeElement, ' background-color', '#ffffff');
    }, 1000);
    setTimeout(x => {
      this.renderer.setStyle(this.ngall.nativeElement, 'box-shadow', 'none');
      this.renderer.setStyle(this.ngall.nativeElement, ' background-color', 'none');
    }, 2000);

    setTimeout(x => {
      this.renderer.setStyle(this.text4.nativeElement, 'display', 'block');
    }, 2000);

    setTimeout(x => {
      this.renderer.setStyle(this.ngapi.nativeElement, 'box-shadow', '0 0 10px rgba(0,0,0,0.5)');
      this.renderer.setStyle(this.ngapi.nativeElement, ' background-color', '#ffffff');
    }, 2000);
    setTimeout(x => {
      this.renderer.setStyle(this.ngapi.nativeElement, 'box-shadow', 'none');
      this.renderer.setStyle(this.ngapi.nativeElement, ' background-color', 'none');
    }, 3000);


    setTimeout(x => {
      this.renderer.setStyle(this.text5.nativeElement, 'display', 'block');
    }, 3000);

    setTimeout(x => {
      this.renderer.setStyle(this.text6.nativeElement, 'display', 'block');
    }, 4000);

    setTimeout(x => {
      this.renderer.setStyle(this.ngcdk.nativeElement, 'box-shadow', '0 0 10px rgba(0,0,0,0.5)');
      this.renderer.setStyle(this.ngcdk.nativeElement, ' background-color', '#ffffff');
    }, 3000);
    setTimeout(x => {
      this.renderer.setStyle(this.ngcdk.nativeElement, 'box-shadow', 'none');
      this.renderer.setStyle(this.ngcdk.nativeElement, ' background-color', 'none');
    }, 4000);
    setTimeout(x => {
      this.renderer.setStyle(this.ngrx.nativeElement, 'box-shadow', '0 0 10px rgba(0,0,0,0.5)');
      this.renderer.setStyle(this.ngrx.nativeElement, ' background-color', '#ffffff');
    }, 4000);
    setTimeout(x => {
      this.renderer.setStyle(this.ngrx.nativeElement, 'box-shadow', 'none');
      this.renderer.setStyle(this.ngrx.nativeElement, ' background-color', 'none');
    }, 5000);
    setTimeout(x => {
      this.renderer.setStyle(this.ngrxo.nativeElement, 'box-shadow', '0 0 10px rgba(0,0,0,0.5)');
      this.renderer.setStyle(this.ngrxo.nativeElement, ' background-color', '#ffffff');
    }, 5000);
    setTimeout(x => {
      this.renderer.setStyle(this.ngrxo.nativeElement, 'box-shadow', 'none');
      this.renderer.setStyle(this.ngrxo.nativeElement, ' background-color', 'none');
    }, 6000);
  }

  navigate(route: string): void {
    this.router.navigate(['ngabout/' + route]);
  }

}
