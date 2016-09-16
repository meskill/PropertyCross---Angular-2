import { Component } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent {
	title = 'PropertyCross';
	instruction = `Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location',
	to search in your current location!`;

	constructor() {
	}
}
