import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';
import { NestopiaService } from '../services/nestopia.service';

@NgModule({
	declarations: [
		SearchComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	providers: [NestopiaService],
	bootstrap: [SearchComponent],
	exports: [
		SearchComponent
	]
})
export class SearchModule { }
