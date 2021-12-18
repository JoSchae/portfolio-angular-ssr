import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [SidebarComponent],
	imports: [CommonModule, SharedModule, HttpClientModule],
	exports: [SidebarComponent],
})
export class SidebarModule {}
