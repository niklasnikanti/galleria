import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GalleryService } from '../../services/gallery.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent implements OnInit, OnDestroy {
	galleries: any;
	userName: String;
	thumb: boolean;

	gallerySub: any;
	newGallerySub: any;

	constructor(
		private galleryService: GalleryService,
		private authService: AuthService,
		private flashMessage: FlashMessagesService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.authService.getProfile().subscribe(profile => {
			this.userName = profile.user.username;

			this.gallerySub = this.galleryService.getGalleries({owner: this.userName}).subscribe(data => {
				if (data.success) {
					this.galleries = data.galleries;

					for (let i = 0; i < this.galleries.length; i++) {
						if (this.galleries[i].customizations[0]) {
							if (this.galleries[i].customizations[0].options[0]) {
								if (this.galleries[i].customizations[0].options[0].imagePath) {
									this.galleries[i].thumb = true;
								}
							}
						}
					}

					console.log(this.galleries);
				} else {
					this.flashMessage.show('Galleriaa ei voitu ladata :(', {cssClass: 'toast toast-alert', timeout: 1000});
				}
			});
		},
		err => {
			console.log(err);
			return false;
		}
		);
	}

	// Create a new gallery.
	newGallery() {
		const owner = {owner: this.userName};

		this.newGallerySub = this.galleryService.createGallery(owner).subscribe(data => {
			if (data.success) {
				this.router.navigate(['/galleryedit', data.id]);
			} else {
				this.flashMessage.show('Galleriaa ei voitu luoda :(', {cssClass: 'toast toast-alert', timeout: 1000});
				console.log(data.msg);
			}
		});
	}

	viewGallery(gallery_id) {
		this.router.navigate(['/gallery', gallery_id]);
	}

	// Unsub on destroy to remove any potential memory leaks.
	ngOnDestroy() {
		this.gallerySub.unsubscribe();

		if (this.newGallerySub) {
			this.newGallerySub.unsubscribe();
		}
	}
}
