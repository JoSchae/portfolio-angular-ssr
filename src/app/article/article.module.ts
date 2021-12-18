import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleSectionComponent } from './article-section/article-section.component';
import { ArticleComponent } from './article.component';

@NgModule({
	declarations: [ArticleSectionComponent, ArticleComponent],
	imports: [CommonModule],
	exports: [ArticleComponent],
})
export class ArticleModule {}
