import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { RootService } from './root.service';

@Injectable()
export class UploadService {
	root: String = this.rootService.root;

	constructor(
		private http: Http,
		private rootService: RootService
	) { }

  	uploadImage(file, img_id) {
		let headers = new Headers();
		headers.append('img_id', img_id);
		return this.http.post(this.root + 'uploads/image', file, {headers: headers})
		  .map(res => res.json());
	}


	removeImage(filepath) {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post(this.root + 'uploads/remove', filepath, {headers: headers})
		  .map(res => res.json());
	}

	getFileSizeLimit() {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.get(this.root + 'uploads/sizelimit', {headers: headers})
	  		.map(res => res.json());
	}

	getUploadPath() {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.get(this.root + 'uploads/path', {headers: headers})
	  		.map(res => res.json());
	}
}
