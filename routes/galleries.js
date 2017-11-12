const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Gallery = require('../models/gallery');

// Save
router.post('/save', (req, res, next) => {
    let newGallery = new Gallery({
    	owner: req.body.owner,
    	gallery_id: req.body.gallery_id,
        header: req.body.header,
        customizations: req.body.customizations
    });

    Gallery.getGalleryByGallery_id(newGallery.gallery_id, (err, gallery) => {
        if(err) throw err;

        if (gallery) {
	        Gallery.updateGallery(newGallery, (err, gallery) => {
	            if(err) {
	                res.json({success: false, msg: 'Gallerian päivitys epäonnistui'});
	            } else {
	                res.json({success: true, msg: 'Gallery päivitetty'});
	            }
	        });
        } else {
	        Gallery.saveGallery(newGallery, (err, gallery) => {
	            if(err) {
	                res.json({success: false, msg: 'Gallerian tallennus epäonnistui'});
	            } else {
	                res.json({success: true, msg: 'Galleria tallennettu'});
	            }
	        });
        }
    });
});

// Gallery
router.post('/gallery', (req, res, next) => {
    Gallery.getGalleryByGallery_id(req.body.gallery_id, (err, gallery) => {
        if(err) throw err;

        if(gallery) {
            return res.json({gallery: gallery});
        }
    });
});

// Gallery By Owner
router.post('/galleryown', (req, res, next) => {
    Gallery.getGalleryByOwner({owner: req.body.owner, gallery_id: req.body.gallery_id}, (err, gallery) => {
        if(err) throw err;


        if (gallery) {
            return res.json({gallery: gallery});
        } else {
            return res.json({gallery: undefined});
        }
    });
});

// Galleries
router.post('/galleries', (req, res, next) => {
    Gallery.getGalleriesByOwner(req.body.owner, (err, galleries) => {
        if(err) throw err;

        if(galleries) {
            res.json({success: true, msg: 'Galleria tallennettu', galleries: galleries});
        }
    });
});

// New gallery
router.post('/new', (req, res, next) => {
    let newGallery = new Gallery({
    	owner: req.body.owner,
    	gallery_id: Date.now() + '',
        header: "Uusi galleria",
        customizations: [
        	{
        		title: "1. kustomointi",
        		options: [
        			{
        				name: "1. vaihtoehto"
        			}
        		]
        	}
        ]
    });

    Gallery.getGalleryByGallery_id(newGallery.gallery_id, (err, gallery) => {
        if(err) throw err;

        if (gallery) {
	        res.json({success: false, msg: 'Galleria samalla tunnisteella on jo olemassa! Yritä uudelleen'});
        } else {
	        Gallery.saveGallery(newGallery, (err, gallery) => {
	            if(err) {
	                res.json({success: false, msg: 'Gallerian luonti epäonnistui :('});
	            } else {
	                res.json({success: true, msg: 'Gallery luotu', id: newGallery.gallery_id});
	            }
	        });
        }
    });
});

// Remove gallery
router.post('/remove', (req, res, next) => {
    Gallery.removeGalleryById(req.body.gallery_id, (err, gallery) => {
        if(err) throw err;

        if(gallery) {
            res.json({success: true, msg: 'Gallery poistettu'});
        }
    });
});

module.exports = router;