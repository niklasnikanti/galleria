const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Gallery Schema
const GallerySchema = mongoose.Schema({
	gallery_id: {
		type: String,
		required: true
	},
	owner: {
		type: String,
		required: true
	},
	header: {
		type: String,
		required: true
	},
	customizations: [
		{
			title: String,
			options: [
				{
					name: String,
					image: String,
					imageName: String,
					imagePath: String,
					thumb: String,
					thumbName: String,
					thumbPath: String
				}
			]
		}
	]
});

const Gallery = module.exports = mongoose.model('Gallery', GallerySchema);

module.exports.getGalleryById = function(id, callback) {
	Gallery.findById(id, callback);
}

module.exports.getGalleryByGallery_id = function(gallery_id, callback) {
	const query = {gallery_id: gallery_id}
	return Gallery.findOne(query, callback);
}

module.exports.getGalleryByOwner = function(gallery, callback) {
	const query = {owner: gallery.owner, gallery_id: gallery.gallery_id}
	return Gallery.findOne(query, callback);
}

module.exports.getGalleriesByOwner = function(owner, callback) {
	const query = {owner: owner}
	Gallery.find(query, callback);
}

// Update the gallery
module.exports.updateGallery = function(gallery, callback) {
	Gallery.update(
	{
		gallery_id: gallery.gallery_id
	},
	{
		header: gallery.header, 
		customizations: gallery.customizations
	},
		callback
	);
}

module.exports.saveGallery = function(gallery, callback) {
	gallery.save(callback);
}

module.exports.removeGalleryById = function(gallery_id, callback) {
	const query = {gallery_id: gallery_id}
	return Gallery.remove(query, callback);
}