import { Component, OnInit, ViewChild, AfterViewChecked, OnDestroy } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverModule } from "ng2-popover";

//Interfaces for the gallery object. Should probably move these to a new file.
// Customization object inside the customizations array.
export interface Customization {
	title: String, // Title of the customization.
	options: Option[] // Options of the customization.
}

// Option object inside the options array.
interface Option {
	name: String, // Name of the customization option.
	imageName?: String, // Display name of the name. The original file name in the user's device.
	imagePath?: String, // Path to the image file. In the server.
	imageFile?: File, // Actual image file to be uploaded to the server as a part of the form data.
	imagePreview?: String, // Image source to show in the preview window. DataURL or path to the image file.
	imageRemove?: String, // Image to remove from the server. Contains the path to remove.
	thumbName?: String, // Display name of the name. The original file name in the user's device.
	thumbPath?: String, // Path to the thumb file. In the server.
	thumbFile?: File, // Actual thumb file to be uploaded to the server as a part of the form data.
	thumbPreview?: String, // Thumb source to show in the preview window. DataURL or path to the thumb file.
	thumbRemove?: String, // Thumb to remove from the server. Contains the path to remove.
}

declare var bootbox:any;
declare var $:any;
//declare var uploadSizeLimit:any;

@Component({
  selector: 'app-galleryedit',
  templateUrl: './galleryedit.component.html',
  styleUrls: ['./galleryedit.component.css']
})
export class GalleryeditComponent implements OnInit, AfterViewChecked, OnDestroy {
	@ViewChild('imagePreview') imagePreview : any;
	@ViewChild('thumbPreview') thumbPreview : any;
	gallerySub: any;
	saveGallerySub: any;
	removeGallerySub: any;
	fileSizeSub: any;
	pathSub: any;
	pathToGallery: String;
	imageCount: number;
	showLink: boolean;
	saving: boolean;
	changed: boolean; // Tells if any changes has been made to the gallery since last time it has been saved.
	fileSizeLimit: number;
	uploadLimit: number; // Upload limit.
	uploadPath: String; // Upload path.
	pathsToRemove: String[]; // When a option or customization is deleted and it has an image, this keeps the file path stored for removal.
	preview: { // Holds the dimensions for the preview images.
		image: {
			width: number,
			height: number
		},
		thumb: {
			width: number,
			height: number
		}
	};

	gallery: {
		gallery_id?: String,
		owner?: String,
		header: String,
		customizations?: Customization[]
	};

	constructor(
		private galleryService: GalleryService,
		private authService: AuthService,
		private uploadService: UploadService,
		private flashMessage: FlashMessagesService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.gallery = {
			header: "Loading..."
		}

		this.preview = { // Holds the dimensions for the preview images.
			image: {
				width: 0,
				height: 0
			},
			thumb: {
				width: 0,
				height: 0
			}
		};


		this.pathsToRemove = [];

		this.authService.getProfile().subscribe(profile => {
			let owner = profile.user.username;

			let idString = this.route.snapshot.params['id'];
			let id = {gallery_id: idString};
			this.pathToGallery = window.location.origin + '/gallery/' + idString;

			// Find the owner's gallery with the requested id.
			this.gallerySub = this.galleryService.getGalleryByOwner({"owner": owner, "gallery_id": idString}).subscribe(gallery => {
				// Only show the gallery if it's owned by the current user.
				this.gallery = (gallery.gallery && owner == gallery.gallery.owner) ? gallery.gallery : undefined;

				if (this.gallery) {
					// Set preview images for the option.
					for (let i = 0; i < this.gallery.customizations.length; i++) {
						for (let j = 0; j < this.gallery.customizations[i].options.length; j++) {
							if (this.gallery.customizations[i].options[j].imagePath) {
								this.gallery.customizations[i].options[j].imagePreview = this.gallery.customizations[i].options[j].imagePath;
							}
							if (this.gallery.customizations[i].options[j].thumbPath) {
								this.gallery.customizations[i].options[j].thumbPreview = this.gallery.customizations[i].options[j].thumbPath;
							}
						}
					}

					// Get the upload file size limit.
					this.fileSizeSub = this.uploadService.getFileSizeLimit().subscribe(limit => {
						this.fileSizeLimit = (limit.fileSizeLimit) ? limit.fileSizeLimit : 	2097152;
						this.uploadLimit = Math.floor(this.fileSizeLimit / 1000000);
					},
					err => {
						console.log(err);
						return false;
					}
					);

					// Get the upload path limit.
					this.pathSub = this.uploadService.getUploadPath().subscribe(path => {
						this.uploadPath = path.path;
					},
					err => {
						console.log(err);
						return false;
					}
					);
				} else {
					this.flashMessage.show('Galleriaa ei voitu ladata :(', {cssClass: 'toast toast-alert', timeout: 1000});
					console.log(gallery);
				}
			},
			err => {
				console.log(err);
				return false;
			}
			);
		},
		err => {
			console.log(err);
			return false;
		}
		);
	}

	ngAfterViewChecked() {
		if (this.imagePreview) {
			this.preview.image.height = this.imagePreview.nativeElement.offsetHeight - 16;
			this.preview.image.width = this.preview.image.height * 1.7777777777777777; // 16:9
			this.imagePreview = undefined;
		}
		if (this.thumbPreview) {
			this.preview.thumb.height = this.thumbPreview.nativeElement.offsetHeight - 16;
			this.preview.thumb.width = this.preview.thumb.height; // 1:1
			this.thumbPreview = undefined;
		}
	}

	// Mark the gallery as changed (for saving purposes) after any input change.
	inputChanged() {
		this.changed = true;
	}

	enterImage(e, option) {
		if(e.key == "Enter") {
			e.target.click();
		}
	}

	// Start the drag.
	dragStart(e, option) {
		e.preventDefault();
		e.stopPropagation();

		let i = option.which;
		let j = option.index;
		let type = option.type;

		(<HTMLElement>document.getElementById(type+"zone-"+i+"-"+j)).classList.add("upload-allowed");
		(<HTMLElement>document.getElementById(type+"zone-"+i+"-"+j)).classList.remove("upload-disallowed");
	}

	// Stop the drag.
	dragStop(e, option) {
		e.preventDefault();
		e.stopPropagation();

		let i = option.which;
		let j = option.index;
		let type = option.type;

		(<HTMLElement>document.getElementById(type+"zone-"+i+"-"+j)).classList.remove("upload-allowed");
		(<HTMLElement>document.getElementById(type+"zone-"+i+"-"+j)).classList.remove("upload-disallowed");
	}

	// Drop the file.
	dropFile(e, option) {
		e.preventDefault();
		option.file = e.dataTransfer.files[0];

		this.dragStop(e, option);
		this.changeImage(e, option);
	}

	// Change image. Either the big image or the thumb.
	//TODO: Reduce lag when uploading multiple images at once.
	changeImage(e, option) {
		//console.log(e);
		const allowedFiletypes = "jpeg|jpg|png|gif";

		const i = option.which;
		const j = option.index;
		const type = option.type;

		let opt = this.gallery.customizations[i].options[j];

		if (opt[type+'Path']) {
			opt[type+'Remove'] = opt[type+'Path'];
		}
		
		const file = (option.file) ? option.file : e.target.files[0];
		if (file.type.match(allowedFiletypes)) {
			// Don't allow images over certain size. (Defined in the main app file)
			if (file.size <= this.fileSizeLimit) {
				// Compress the preview images.
				opt[type+'Name'] = file.name;
				opt[type+'File'] = file;
				let that = this;

				var reader = new FileReader();
				reader.onload = function(evt: any) {
					let targetWidth:any, targetHeight:any;
					let quality = 2; // Rendering resolution factor for thumbnails.
					if (type == 'image') {
						targetWidth = that.preview.image.width * quality || 300 * quality;
						targetHeight = that.preview.image.height * quality || 169 * quality;
					} else {
						targetWidth = targetHeight = that.preview.thumb.width * quality;
					}

					let img = new Image(/*width, height*/);
						img.onload = function() {
						    let targetCanvas = document.createElement('canvas');
						    let targetCtx:any = targetCanvas.getContext('2d');
						    targetCanvas.width = targetWidth;
						    targetCanvas.height = targetHeight;

					    	targetCtx.drawImage(img, 0, 0, targetCanvas.width, targetCanvas.height);

						    // Change non-opaque pixels to white
							var imgData = targetCtx.getImageData(0, 0, targetCanvas.width, targetCanvas.height);
							var data = imgData.data;
							for(var i = 0; i < data.length; i += 4){
							    if(data[i + 3] < 128){
							        data[i] = 255;
							        data[i + 1] = 255;
							        data[i + 2] = 255;
							        data[i + 3] = 255;
							    }
							}
							targetCtx.putImageData(imgData, 0, 0);

						    let dataURL = targetCanvas.toDataURL('image/jpeg', 0.75);
							opt[type+'Preview'] = dataURL; //evt.target.result;

						    targetCanvas.remove();
							this.remove();
						}
						img.src = evt.target.result;
				}
				reader.readAsDataURL(file);
				this.changed = true;
			} else {
				this.flashMessage.show('Tiedosto on liian iso!', {cssClass: 'toast toast-alert', timeout: 1000});
				(<HTMLElement>document.getElementById(type+"zone-"+i+"-"+j)).classList.add("upload-disallowed");
			}
		} else {
			(<HTMLElement>document.getElementById(type+"zone-"+i+"-"+j)).classList.add("upload-disallowed");
		}
	}

	// Remove image from a customization option.
	removeImage(option) {
		let i = option.which;
		let j = option.index;
		let type = option.type;
		let opt = this.gallery.customizations[i].options[j];

		opt[type+'Remove'] = opt[type+'Path'];
		opt[type+'Path'] = undefined;
		opt[type+'Preview'] = undefined;

		// Reset the input value.
		(<HTMLInputElement>document.getElementById(type+"-"+i+"-"+j)).value = "";

		this.changed = true;
	}

	// Remove an option from a customization.
	removeOption(option) {
		let i = option.which;
		let j = option.index;

		// Remove any images in the option.
		let pathsToDestroy = [
			this.gallery.customizations[i].options[j].imagePath,
			this.gallery.customizations[i].options[j].thumbPath,
			this.gallery.customizations[i].options[j].imageRemove,
			this.gallery.customizations[i].options[j].thumbRemove
		];

		for (let k = 0; k < pathsToDestroy.length; k++) {
			if (pathsToDestroy[k]) {
				this.pathsToRemove.push(pathsToDestroy[k]);
			}
		}

		this.gallery.customizations[i].options.splice(j, 1);
		this.changed = true;

		this.flashMessage.show('Vaihtoehto poistettu', {cssClass: 'toast toast-alert', timeout: 1000});
	}

	// Remove a customization from the gallery.
	removeCustomization(i) {
		// Remove any customization option images.
		for (let j = 0; j < this.gallery.customizations[i].options.length; j++) {
			// Remove any images in the option.
			let pathsToDestroy = [
				this.gallery.customizations[i].options[j].imagePath,
				this.gallery.customizations[i].options[j].thumbPath,
				this.gallery.customizations[i].options[j].imageRemove,
				this.gallery.customizations[i].options[j].thumbRemove
			];

			for (let k = 0; k < pathsToDestroy.length; k++) {
				if (pathsToDestroy[k]) {
					this.pathsToRemove.push(pathsToDestroy[k]);
				}
			}
		}

		this.gallery.customizations.splice(i, 1);
		this.changed = true;

		this.flashMessage.show('Kustomointi poistettu', {cssClass: 'toast toast-alert', timeout: 1000});
	}

	// Add an option to a customization.
	addOption(index) {
		this.gallery.customizations[index].options.push({
			name: ""
		});
		this.changed = true;

		this.flashMessage.show('Vaihtoehto lisätty', {cssClass: 'toast toast-success', timeout: 1000});
	}

	// Add a customization to the gallery.
	addCustomization() {
		//console.log(this.gallery.customizations);
		this.gallery.customizations.push({
			title: "",
			options: [{
				name: ""
			}]
		});
		this.changed = true;

		this.flashMessage.show('Kustomointi lisätty', {cssClass: 'toast toast-success', timeout: 1000});
	}

	// Init the gallery save.
	initSaveGallery() {
		//console.log("initSaveGallery.");
		if (!this.saving) {
			this.saving = true;
			this.imageCount = 0;
			for (let i = 0; i < this.gallery.customizations.length; i++) {
				for (let j = 0; j < this.gallery.customizations[i].options.length; j++) {
					let option = this.gallery.customizations[i].options[j];

					// Check any image files to remove from the server.
					let imagesToRemove:any[] = [{file: option.imageRemove, type: 'image'}, {file: option.thumbRemove, type: 'thumb'}]; /*[option.imageRemove, option.thumbRemove];*/
					if (imagesToRemove.length > 0) {
						for (let k = 0; k < imagesToRemove.length; k++) {
							if (imagesToRemove[k].file != undefined) {
								this.imageCount++;
								let pathToRemove = {path: imagesToRemove[k].file.substring(0)};

								this.uploadService.removeImage(pathToRemove).subscribe(data => {
									console.log(data);
									if(data.success) {
										option[imagesToRemove[k].type+'Remove'] = undefined;
										this.imageCount--;
										this.trySaveGallery();
									} else {
										console.log(data.msg);
										this.flashMessage.show('Kuvaa ei voitu poistaa :(', {cssClass: 'toast toast-alert', timeout: 1000});
									}
								});
							}
						}
					}

					// Check any image files to save to the server.
					let imagesToSave:any[] = [{file: option.imageFile, type: 'image'}, {file: option.thumbFile, type: 'thumb'}];
					if (imagesToSave.length > 0) {
						for (let k = 0; k < imagesToSave.length; k++) {
							if (imagesToSave[k].file != undefined) {
								this.imageCount++;
								let formData = new FormData();
								formData.append('img', imagesToSave[k].file);

								// Assign an image id to the uploaded image as a part of its filename.
								let imgID = imagesToSave[k].type + '-' + this.gallery.owner + '-' + i + '-' + j;

								this.uploadService.uploadImage(formData, imgID).subscribe(data => {
									if(data.success) {
										option[imagesToSave[k].type+'Path'] = /*'../assets/images/'*/ /*'../' +*/ this.uploadPath.substring(2) + '/' + data.file.filename;
										option[imagesToSave[k].type+'Name'] = data.file.originalname;
										option[imagesToSave[k].type+'File'] = undefined;
										console.log(option[imagesToSave[k].type+'Path']);
										this.imageCount--;
										this.trySaveGallery();
									} else {
										console.log(data.msg);
										this.flashMessage.show('Kuvaa ei voitu tallentaa :(', {cssClass: 'toast toast-alert', timeout: 1000});
									}
								});
							}
						}
					}
				}
			}

			// Check for any additional images to remove.
			for (let i = 0; i < this.pathsToRemove.length; i++) {
				this.imageCount++;
				let pathToRemove = {path: this.pathsToRemove[i].substring(3)};

				this.uploadService.removeImage(pathToRemove).subscribe(data => {
					if(data.success) {
						this.imageCount--;
						this.trySaveGallery();
					} else {
						console.log(data.msg);
						this.flashMessage.show('Kuvaa ei voitu poistaa :(', {cssClass: 'toast toast-alert', timeout: 1000});
					}
				});
			}

			this.pathsToRemove = [];
			this.trySaveGallery();
		}
	}

	// Try to save the gallery if there are no images left to upload.
	trySaveGallery() {
		//console.log('Trying to save gallery..');
		if (this.imageCount == 0) {
			this.saveGallery();
		}
	}

	// Save the gallery to the database.
	saveGallery() {
		//console.log('Saving gallery...');
		const gallery = {
			gallery_id: this.gallery.gallery_id,
			owner: this.gallery.owner,
			header: this.gallery.header,
			customizations: JSON.parse(JSON.stringify(this.gallery.customizations)) // Create a deep copy of the array to allow remove some properties that are not sent to the server.
		}

		// Remove image preview and file from being sent to the server.
		for (let customization of gallery.customizations) {
			for (let option of customization.options) {
				option.imageFile = undefined;
				option.imagePreview = undefined;
				option.thumbFile = undefined;
				option.thumbPreview = undefined;
			}
		}

		this.saveGallerySub = this.galleryService.saveGallery(gallery).subscribe(data => {
			console.log(data);
			if (data.success) {
				this.flashMessage.show('Galleria tallennettu', {cssClass: 'toast toast-info', timeout: 1000});
				this.changed = false;
			} else {
				console.log(data.msg);
				this.flashMessage.show('Galleriaa ei voitu tallentaa :(', {cssClass: 'toast toast-alert', timeout: 1000});

			}
			this.saving = false;
		});
	}

	// Remove the gallery from the database.
	initRemoveGallery() {
		this.imageCount = 0;
		let that = this; // Because this can't be directly referenced inside the callback.

		// Confirm before removing the gallery.
		bootbox.confirm({
		    title: "Poistetaanko galleria?",
		    message: "Haluatko varmasti poistaa tämän gallerian? Tätä ei voi peruuttaa.",
		    buttons: {
		        cancel: {
		            label: '<i class="fa fa-times"></i> Peruuta'
		        },
		        confirm: {
		            label: '<i class="fa fa-check"></i> Kyllä'
		        }
		    },
		    callback: function (confirm) {
		    	if (confirm) {
		    		if (that.gallery.customizations) {
	    				for (let i = 0; i < that.gallery.customizations.length; i++) {
							for (let j = 0; j < that.gallery.customizations[i].options.length; j++) {
								let option = that.gallery.customizations[i].options[j];

								// Check any image files to remove from the server.
								let imagesToRemove:String[] = [option.imagePath, option.thumbPath, option.imageRemove, option.thumbRemove];
								if (imagesToRemove.length > 0) {
									for (let k = 0; k < imagesToRemove.length; k++) {
										if (imagesToRemove[k] != undefined) {
											that.imageCount++;
											let pathToRemove = {path: imagesToRemove[k].substring(0)};
											that.uploadService.removeImage(pathToRemove).subscribe(data => {
												//console.log(data);
												if(data.success) {
													that.imageCount--;
													that.tryRemoveGallery(that);
												} else {
													//console.log(data.msg);
													this.flashMessage.show('Kuvaa ei voitu poistaa :(', {cssClass: 'toast toast-alert', timeout: 1000});
												}
											});
										}
									}
								}
							}
						}
		    		}
		    		that.tryRemoveGallery(that);
		    	}

		    	return;
		    },
		    backdrop: true
		});
	}

	// Try to remove the gallery.
	tryRemoveGallery(that) {
		if (that.imageCount == 0) {
			that.removeGallery(that);
		}
	}

	// Remove the gallery.
	removeGallery(that) {
		console.log("Removing gallery...");
		that.removeGallerySub = that.galleryService.removeGallery({gallery_id: that.gallery.gallery_id}).subscribe(data => {
			if (data.success) {
				that.router.navigate(['/galleries']);
			} else {
				console.log(data.msg);
				this.flashMessage.show('Galleriaa ei voitu poistaa :(', {cssClass: 'toast toast-alert', timeout: 1000});
			}
		});
	}

	// Show the embed link.
	embedLink() {
		this.showLink = true;

	    //Get Input Element
	    var copyDiv = document.getElementById('embedlink');
	    	copyDiv.style.display = "block";

	    //Give the text element focus
	    copyDiv.focus();

	    //Select all content
	    document.execCommand('SelectAll');

	    //Copy Content
	    document.execCommand("Copy", false, null);

	    //copyDiv.blur();

	    this.flashMessage.show('Linkki kopioitu', {cssClass: 'toast toast-success', timeout: 1000});
	}

	exitGallery(where) {
		// Confirm before removing the gallery.
		if (this.changed) {
			let that = this;
			bootbox.confirm({
			    title: "Poistutaanko tallentamatta?",
			    message: "Galleriaa on muutettu viime tallennuksen jälkeen. Haluatko poistua tallentamatta?",
			    buttons: {
			        cancel: {
			            label: '<i class="fa fa-times"></i> Peruuta'
			        },
			        confirm: {
			            label: '<i class="fa fa-check"></i> Kyllä'
			        }
			    },
			    callback: function (confirm) {
			    	if (confirm) {
			    		that.router.navigate(['/'+where]);
			    	}

			    	return;
			    },
			    backdrop: true
			});
		} else {
			this.router.navigate(['/'+where]);
		}
	}

	// Unsub on destroy to remove any potential memory leaks.
	ngOnDestroy() {
		this.gallerySub.unsubscribe();

		if (this.saveGallerySub) {
			this.saveGallerySub.unsubscribe();
		}

		if (this.removeGallerySub) {
			this.removeGallerySub.unsubscribe();
		}
	}
}
