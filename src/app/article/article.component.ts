import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../models/article-section.interface';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
	@Input() article?: IArticle;

	constructor() {}

	ngOnInit(): void {}
}
