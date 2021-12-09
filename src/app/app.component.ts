import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-angular-ssr';

  constructor(private readonly router: Router) {}

  routeTo(destination: string) {
	  this.router.navigateByUrl(destination);
  }

  writeSomething() {
    console.log('Fuck you!')
  }
}
