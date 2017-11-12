import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GalleryService } from '../../services/gallery.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

//Interfaces for the gallery object. Should probably move these to a new file.
// Option object inside the options array.
interface Option {
	imagePath?: String,
	thumbPath?: String,
	id?: String,
	name?: String
}

// Customization object inside the customizations array.
export interface Customization {
	title: String,
	options: Option[],
	selected?: Option
}

declare var $:any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
	gallery_id: Object;
	id_object: Object;
	userName: String;
	isOwner: boolean;
	gallerySub: any;

	gallery: {
		owner: String,
		header: String,
		customizations: Customization[],
	};

	constructor(
		private galleryService:GalleryService,
		private authService: AuthService,
		private router: Router,
		private route: ActivatedRoute,
		public nav: NavbarService 
	) { }

	ngOnInit() {
		let that = this;
		let id = this.route.snapshot.params['id'];

		// Check for hide navigation.
		if (this.route.snapshot.queryParams['hidenav']) {
			this.nav.hide();
		}

		this.id_object = {gallery_id: id};
		this.gallery_id = id;

		if (this.authService.loggedIn()) {
			this.authService.getProfile().subscribe(profile => {
				this.userName = profile.user.username;
				this.checkOwner();
			},
			err => {
				console.log(err);
				return false;
			}
			);
		}

		this.gallerySub = this.galleryService.getGallery(this.id_object).subscribe(gallery => {
			this.gallery = gallery.gallery;

			// Set preview images for the option.
			for (let i = 0; i < this.gallery.customizations.length; i++) {
				let customs = this.gallery.customizations[i];

				// Make option thumbnail same as its  image if no thumbnail exists.
				for (let j = 0; j < customs.options.length; j++) {
					let option = customs.options[j];
					option.thumbPath = (option.thumbPath) ? option.thumbPath : option.imagePath;
				}

				// Set the selected values in each customization to the first option in the array.
				customs.selected = {
					id: 'canvas-' + i + '-' + 0,
					name: this.gallery.customizations[i].options[0].name
				}
			}

			this.checkOwner();
		},
		err => {
			console.log(err);
			return false;
		});
	}

	// Check if the current gallery viewer is the owner.
	checkOwner() {
		if (this.userName && this.gallery) {
			if (this.userName == this.gallery.owner) {
				this.isOwner = true;
			}
		}
	}

	// Change a customization option.
	changeCustomization(e, customization) {
		e.stopPropagation();

		const i = customization.which;
		const j = customization.index;
		this.gallery.customizations[i].selected.id = 'canvas-' + i + '-' + j;
		this.gallery.customizations[i].selected.name = this.gallery.customizations[i].options[j].name;

		$(e.target).addClass("active").removeClass("nonactive").siblings().addClass("nonactive");
	}

	ngOnDestroy() {
		this.gallerySub.unsubscribe();
	}
}
