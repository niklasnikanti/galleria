const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const app = require('../app');
const fs = require('fs');

// Upload image
router.post('/image', (req, res) => {
    app.fileUpload(req, res, (err) => {
        if(err) {
            console.log(err);
            res.json({success: false, msg: err});
        } else {
            if(req.file == undefined) {
                res.json({success: false, msg: 'Virhe: Ei valittua kuvaa!'});
            } else {
                res.json({success: true, msg: 'Kuva ladattu', file: req.file});
            }    
        }
    });
});

// Remove Image
router.post('/remove', (req, res) => {
    //console.log(req.body);
    fs.unlink(/*'./angular-src/src/' +*/ req.body.path, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.json({success: true, msg: 'Kuva poistettu'});
        }
    });
});

// Get upload size limit
router.get('/sizelimit', (req, res) => {
    if (app.uploadSizeLimit) {
        res.json({fileSizeLimit: app.uploadSizeLimit});
    } else {
        console.log('No upload size limit defined');
    } 
});

// Get upload path
router.get('/path', (req, res) => {
    if (app.destination) {
        res.json({path: app.destination});
    } else {
        console.log('No upload path defined');
    } 
})

module.exports = router;