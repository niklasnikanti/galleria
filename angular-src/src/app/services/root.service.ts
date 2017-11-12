import { Injectable } from '@angular/core';

// Provides the location of the server root.
@Injectable()
export class RootService {
	port: number = 3000;
	root: String = 'http://' + window.location.hostname + ':' + this.port + '/';


  	constructor() {
  		//console.log(window.location);
  		console.log(this.root);
  	}

}
