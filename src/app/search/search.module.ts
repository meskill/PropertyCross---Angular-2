import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchComponent } from './search.component';

@NgModule({
	declarations: [
		SearchComponent
	],
	imports: [
		CommonModule
	],
	providers: [],
	bootstrap: [SearchComponent],
	exports: [
		SearchComponent
	]
})
export class SearchModule { }
