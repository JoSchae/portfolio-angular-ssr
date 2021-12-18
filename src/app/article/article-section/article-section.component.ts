import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-article-section',
	templateUrl: './article-section.component.html',
	styleUrls: ['./article-section.component.scss'],
})
export class ArticleSectionComponent implements OnInit {
	@Input() sectionHeader!: string;
	@Input() sectionText?: string;

	constructor() {}

	ngOnInit(): void {}
}
