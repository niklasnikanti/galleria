import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { RootService } from './root.service';

@Injectable()
export class GalleryService {
	root: String = this.rootService.root;

  	constructor(
  		private http: Http,
  		private rootService: RootService
	) { }

  	getGallery(gallery_id) {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post(this.root + 'galleries/gallery', gallery_id, {headers: headers})
		  .map(res => res.json());
	}

  	getGalleryByOwner(gallery) {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post(this.root + 'galleries/galleryown', gallery, {headers: headers})
		  .map(res => res.json());
	}

	createGallery(owner) {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post(this.root + 'galleries/new', owner, {headers: headers})
		  .map(res => res.json());
	}

	saveGallery(gallery) {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post(this.root + 'galleries/save', gallery, {headers: headers})
			.map(res => res.json());
	}

	getGalleries(owner) {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post(this.root + 'galleries/galleries', owner, {headers: headers})
			.map(res => res.json());
	}

	removeGallery(gallery_id) {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post(this.root + 'galleries/remove', gallery_id, {headers: headers})
		  .map(res => res.json());
	}
}
