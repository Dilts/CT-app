var userModel = require('../models/users.js')

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	createUpload: function(req, res) {
    console.log(req.body);

    req.user.name = req.body.name
    req.user.url = req.body.url
    req.user.title = req.body.title
    req.user.desc = req.files.desc

    console.log(req.user)
    req.user.save(function(err, doc) {
    	if (err) {
    		console.log('error not saving', err)
    		res.send(500, 'did not save')
    	}

    }) 

    res.render('index', req)

	},

};


module.exports = indexController;