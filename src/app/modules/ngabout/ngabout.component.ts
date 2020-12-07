import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngabout',
  templateUrl: './ngabout.component.html',
  styleUrls: ['./ngabout.component.scss']
})
export class NgaboutComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  navigate(route: string): void {
    this.router.navigate(['ngabout/' + route]);
  }

}
