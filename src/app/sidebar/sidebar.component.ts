import { Component } from '@angular/core';
import { sidebarSkills } from 'src/assets/data/sidebar-data';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
	public skills = sidebarSkills
		.sort((a, b) => -1 * (a.percentage - b.percentage))
		.slice(0, 5);
}
