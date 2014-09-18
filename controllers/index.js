var mongoose = require('mongoose');
var userModel = require('../models/users.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	createUpload: function(req, res) {

    var user = new userModel({
	    name: req.body.name,
	    url: req.body.url,
	    title: req.body.title,
	    desc: req.body.desc,
	    });  	
    
    // req.user.name = req.body.name,
    // req.user.url = req.body.url,
    // req.user.title = req.body.title,
    // req.user.desc = req.body.desc,

    console.log(user)

    user.save( function(err, doc) {
    	if (err) {
    		console.log('error not saving', err)
    		res.send(status, 'did not save')
    	}
    }) 

    res.render('index', req)

	},

};


module.exports = indexController;