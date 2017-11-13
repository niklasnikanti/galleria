import { Injectable } from '@angular/core';

// Provides the location of the server root.
@Injectable()
export class RootService {
	port: number = 8080;
	root: String = ''; //'http://' + window.location.hostname + ':' + this.port + '/';


  	constructor() {

  	}

}
