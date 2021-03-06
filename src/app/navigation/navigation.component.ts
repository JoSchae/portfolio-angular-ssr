import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent   {

	constructor(private readonly router: Router) {}

	routeTo(destination: string) {
		this.router.navigateByUrl(destination);
	}

}
