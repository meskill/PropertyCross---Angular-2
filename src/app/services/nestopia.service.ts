import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NestopiaService {
	public static url = 'http://api.nestoria.co.uk/api';
	public static params = '?country=uk&pretty=1&encoding=json&listing_type=buy&page=1&callback=JSONP_CALLBACK';
	constructor(private jsonp: Jsonp) {
	}

	search(location: string);
	search(lat: string, lon: string);
	search(firstArg: string, secondArg?: string) {
		let url = NestopiaService.url + NestopiaService.params + `&action=search_listings&place_name=${location}`;
		return this.jsonp.request(url, { method: 'GET' }).map((res: Response) => res.json());
	}
}
